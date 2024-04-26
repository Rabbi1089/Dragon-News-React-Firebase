import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../../assets/1.png";
import { CiCalendar } from "react-icons/ci";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  //console.log(news);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <div className="space-y-6 p-4  md:mt:5 md:mb-15">
        <h2 className="text-2xl font-semibold text-center">All Category</h2>
        {categories.map((category) => (
          <NavLink
            className="block mx-16 my-4 font-semibold text-slate-00"
            key={category.id}
          >
            {category.name}{" "}
          </NavLink>
        ))}
      </div>
      {/* news section */}
      {news.slice(0, 4).map((article, idx) => (
        <div
          key={idx}
          className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100 my-4 mt-5 mx-12 md:mx-0"
        >
          <img
            src={article.thumbnail_url}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-wide">
                {article.title}
              </h2>
            </div>
            <div className="flex justify-between">
              <p>Catagory</p>
              <div className=" flex items-center justify-center">
                {" "}
                <CiCalendar />
                <span className="ml-1">14 jan 2023</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSideNav;
