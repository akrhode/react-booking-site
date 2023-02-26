import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createHashRouter, RouterProvider } from "react-router-dom";
import BlogGreece from "./pages/BlogGreece.jsx";
import BlogItaly from "./pages/BlogItaly.jsx";
import BlogSpain from "./pages/BlogSpain.jsx";
import BlogPortugal from "./pages/BlogPortugal.jsx";

const router = createHashRouter([
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
