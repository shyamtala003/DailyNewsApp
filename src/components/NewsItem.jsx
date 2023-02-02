import React, { Component } from "react";

let NewsItem = ({
  title,
  description,
  imageUrl,
  url,
  author,
  publishedDate,
  source,
}) => {
  return (
    <div className="relative max-w-[300px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <span className="absolute top-2 right-2 rounded-md font-semibold backdrop-blur-lg bg-[rgba(0,0,0,.6)] text-white text-sm px-3 py-1">
        {source}
      </span>
      <a href="#">
        <img
          className="rounded-t-lg w-full min-h-[140px] max-h-40"
          src={imageUrl}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-lg leading-5 font-semibold tracking-wide text-gray-900 dark:text-gray-100">
            {String(title).length > 60 ? title.slice(0, 60) + "..." : title}
            {/* {title} */}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {String(description).length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <p className="mb-3 font-semibold text-gray-500 dark:text-gray-500">
          {!author ? "Unknown" : author}
          <br />
          {new Date(publishedDate).toUTCString()}
        </p>
        <a
          href={url}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
export default NewsItem;
