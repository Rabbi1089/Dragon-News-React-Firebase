import RightSideNav from "../../RightSideNav/RightSideNav";
import LeftSideNav from "../../leftSideNav/LeftSideNav";

const NavBar = () => {
  return (
    <div className=" grid lg:grid-cols-4 grid-cols-1 gap-4">
      <div className="border">
        <LeftSideNav />
      </div>
      <div className="border md:col-span-2">
        <h1>News coming soon</h1>
      </div>
      <div className="border">
        <RightSideNav />
      </div>
    </div>
  );
};

export default NavBar;
