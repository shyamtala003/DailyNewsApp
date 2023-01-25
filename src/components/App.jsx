import React, { useState } from "react";
import NavBar from "./NavBar";
import NewsContainer from "./NewsContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

let App = () => {
  let pageSize = 12;
  const [loaderProgres, setLoaderProgres] = useState(0);
  let setProgres = (progress) => {
    setLoaderProgres(progress);
  };

  return (
    <>
      <Router>
        <LoadingBar
          color="#2563eb"
          progress={loaderProgres}
          onLoaderFinished={() => setProgres(0)}
          height={3}
        />
        <NavBar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <NewsContainer
                SetProgress={setProgres}
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
                SetProgress={setProgres}
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
                SetProgress={setProgres}
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
                SetProgress={setProgres}
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
                SetProgress={setProgres}
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
                SetProgress={setProgres}
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
                SetProgress={setProgres}
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
};

export default App;
