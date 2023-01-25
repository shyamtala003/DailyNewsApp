import React from "react";
import loaderGif from "./images/loader.gif";

let Loading = () => {
  return (
    <div className="flex justify-center w-full">
      <img src={loaderGif} alt="" />
    </div>
  );
};

export default Loading;
