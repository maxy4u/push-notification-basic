import React from "react";
import ReactDOM from "react-dom";
import registerWorker from "./client";
require.context("./images", true, /^\.\//);

if (navigator.serviceWorker) {
  try {
    registerWorker();
  } catch (e) {
    console.error(e);
  }
}

const Index = () => {
  return <div>Welcome to React!</div>;
};
ReactDOM.render(<Index />, document.getElementById("root"));
