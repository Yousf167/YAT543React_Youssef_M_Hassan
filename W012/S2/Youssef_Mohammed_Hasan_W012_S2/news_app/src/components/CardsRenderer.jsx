import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

function CardsRenderer({ API }) {
  const [articles, setArticles] = useState(0);
  const [APIRes, setAPIRes] = useState()
  
  
  setAPIRes(
    fetch(API)
    .then(res => res.body)
    .catch(e => console.log(e)))
  useEffect(() => {
    console.log(APIRes);
    
    setArticles(APIRes)
  }, [articles, API, APIRes])

  function nextPage(){
    
  }

  return (
    <>
      <div className="m-auto max-w-[1300px] columns-1 md:columns-2 lg:columns-3 gap-4 mt-20 p-5 md:p-10 lg:p-15">
        {articles.map((article) => (
          <div key={article.article_id} className="mb-9 break-inside-avoid">
            <NewsCard article={article} />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center h-52">
        <button className="rounded-4xl border-2 border-blue-500">
          Next Page
        </button>
      </div>
    </>
  );
}

export default CardsRenderer;
