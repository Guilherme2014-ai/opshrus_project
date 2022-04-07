// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// CSS
import "./index.scss";

const rootHtmlElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootHtmlElement);

root.render(<App />);
