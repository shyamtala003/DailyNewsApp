import React, { Component } from "react";
import NavBar from "./NavBar";
import NewsContainer from "./NewsContainer";

export class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <NewsContainer pageSize={12} />
      </>
    );
  }
}

export default App;
