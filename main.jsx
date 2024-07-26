/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from "react-dom/client";
import Home from "./src/pages/Home";
import Support from "./src/pages/Support";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
