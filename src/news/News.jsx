import React from "react";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const { image_url, title, details, _id } = news;
  return (
    <div className=" w-full">
      <div className="max-w-full p-4 shadow-lg bg-gray-900 text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize text-gray-100"
            >
              Photography
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
            See All
          </a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image_url}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-sky-400">{title}</h3>
            </a>

            {details.length > 200 ? (
              <p className="leading-snug text-gray-400">
                {details.slice(0, 200)}{" "}
                <Link to={`/news/${_id}`} className=" text-blue-700 font-bold">
                  Read More...
                </Link>
              </p>
            ) : (
              <p className="leading-snug text-gray-400">{details}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
