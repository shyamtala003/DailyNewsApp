import React, { Component } from "react";
import loaderGif from "./images/loader.gif";

export default class Loading extends Component {
  render() {
    return (
      <div className="flex justify-center w-full">
        <img src={loaderGif} alt="" />
      </div>
    );
  }
}
