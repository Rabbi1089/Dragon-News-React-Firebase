import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
