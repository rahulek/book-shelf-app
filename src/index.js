import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="addbook" element={<AddBook />} />
      <Route path="editbook" element={<EditBook />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
