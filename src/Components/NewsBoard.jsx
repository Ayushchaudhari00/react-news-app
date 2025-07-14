import React, { useEffect, useState } from 'react';
import Newsitems from './Newsitems';

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      console.error("API Key not found.");
      return;
    }

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
      })
      .catch((err) => console.error(err));
  }, [category]); // ✅ dependency so it refetches when category changes

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">{category.toUpperCase()}</span> News
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.length === 0 ? (
          <p className="text-light">Loading or no articles...</p>
        ) : (
          articles.map((news, index) => (
            <Newsitems
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NewsBoard;
