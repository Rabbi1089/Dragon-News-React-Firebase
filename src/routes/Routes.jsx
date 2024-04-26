import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import About from "../page/about/About";
import Career from "../page/career/Career";
import Login from "../page/login/Login";
import Home from "../page/home/Home";
import Register from "../register/Register";
import NewsDetails from "../news/NewsDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
