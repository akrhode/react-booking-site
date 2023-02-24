import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogGreece from "./pages/BlogGreece";
import BlogItaly from "./pages/BlogItaly";
import BlogSpain from "./pages/BlogSpain";
import BlogPortugal from "./pages/BlogPortugal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "BlogGreece",
    element: <BlogGreece />,
  },
  {
    path: "BlogItaly",
    element: <BlogItaly />,
  },
  {
    path: "BlogSpain",
    element: <BlogSpain />,
  },
  {
    path: "BlogPortugal",
    element: <BlogPortugal />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
