import { Outlet } from "react-router-dom";
import Home from "../../page/home/Home";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-Poppins">
      <Home />
      <Outlet />
    </div>
  );
};

export default Root;
