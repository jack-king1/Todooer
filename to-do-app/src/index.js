import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div className="min-w-screen min-h-screen object-fill bg-gradient-to-r from-blue-800 to-indigo-900 pb-12">
      <App />
    </div>
  </BrowserRouter>
);
