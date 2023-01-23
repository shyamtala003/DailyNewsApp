import React, { Component } from "react";
import NavBar from "./NavBar";
import NewsContainer from "./NewsContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
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
                  pageSize={12}
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
                  pageSize={12}
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
                  pageSize={12}
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
                  pageSize={12}
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
                  pageSize={12}
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
                  pageSize={12}
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
                  pageSize={12}
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
