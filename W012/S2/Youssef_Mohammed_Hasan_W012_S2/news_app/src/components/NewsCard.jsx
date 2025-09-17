function NewsCard({ article }) {
    return (
        <>

            <div key={article.id} className="dark:bg-[#2a2a2a] bg-blue-50 rounded-2xl p-1.5 transition-all md:flex md:flex-col">
                <div className="flex items-center justify-center">
                    <img className="rounded-t-2xl w-full h-full" src={article.image_url} alt="" />
                </div>
                <div className="p-3 flex flex-col justify-center">
                    <h3 className="text-black dark:text-[#f9fafb] text-xl font-serif">{article.title}</h3>
                    <div className="flex items-center justify-between">
                        <p className="my-3 bg-blue-100 dark:bg-transparent dark:border dark:text-cyan-600 font-extrabold text-center w-max p-2 rounded-4xl text-[10px] text-blue-700">Date: {article.pubDate.split(" ")[0]}</p>
                        <a href={article.link} target="_blank" className=" text-blue-500 text-[14.5px] border border-blue-500 rounded-4xl px-3 py-1 hover:bg-blue-500 hover:text-white transition-all">Go to Article</a>
                    </div>
                    {  
                    article.country[0] != "world" &&
                        <p className=" capitalize  bg-blue-100 dark:bg-transparent dark:border dark:text-cyan-600 font-extrabold text-center w-max p-2 rounded-4xl text-[10px] text-blue-700">Country: {article.country[0]}</p>
                    }
                </div>
            </div>
        </>
    );

}

export default NewsCard;