import React, { useEffect, useState } from "react";
import News from "../News";

const NewsCart = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="space-y-2">
      {news.slice(1, 6).map((news) => (
        <News key={news._id} news={news}></News>
      ))}
    </div>
  );
};

export default NewsCart;
