import React, { Component } from "react";
import NavBar from "./NavBar";
import NewsContainer from "./NewsContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  pageSize = 12;
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <NewsContainer
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              exact
              element={
                <NewsContainer
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              exact
              element={
                <NewsContainer
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              exact
              element={
                <NewsContainer
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              exact
              element={
                <NewsContainer
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              exact
              element={
                <NewsContainer
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              exact
              element={
                <NewsContainer
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
