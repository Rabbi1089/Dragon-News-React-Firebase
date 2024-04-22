import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import About from "../page/about/About";
import Career from "../page/career/Career";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "career",
        element: <Career />,
      },
    ],
  },
]);
