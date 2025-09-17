import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

function CardsRenderer({ API }) {
  const [articles, setArticles] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchArticles = (url) => {
    if (loading) return;
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((body) => {
        setArticles((prev) => {``
          // Deduplicate by article.article_id (or other unique field)
          const existingIDs = new Set(prev.map((a) => a.article_id));
          const newArticles = body.results.filter(
            (a) => !existingIDs.has(a.article_id)
          );
          return [...prev, ...newArticles];
        });
        setNextPage(body.nextPage || null);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  // Initial load
  useEffect(() => {
    fetchArticles(API);
  }, [API]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight;

      if (bottom && nextPage) {
        fetchArticles(`${API}&page=${nextPage}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [API, nextPage, loading]);

  return (
    <>
      <div className="m-auto max-w-[1300px] columns-1 md:columns-2 lg:columns-3 gap-4 mt-20 p-5 md:p-10 lg:p-15">
        {articles.map((article) => (
          <div key={article.article_id} className="mb-9 break-inside-avoid">
            <NewsCard article={article} />
          </div>
        ))}
      </div>

      {loading && (
        <div className="w-full flex justify-center items-center mt-5 mb-[1000px]">
          <p className="text-center text-white rounded-full bg-sky-600 mx-auto px-3 py-1">
            Loading more...
          </p>
        </div>
      )}
    </>
  );
}

export default CardsRenderer;
