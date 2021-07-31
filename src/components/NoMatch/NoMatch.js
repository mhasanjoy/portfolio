import React from "react";
import Footer from "../Footer/Footer";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <>
      <h1 className="no-match">
        <strong>404 Not Found</strong>
      </h1>
      <Footer></Footer>
    </>
  );
};

export default NoMatch;
