import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/header/Header";
import LeftSideNav from "../Shared/leftSideNav/LeftSideNav";
import NavBar from "../Shared/navbar/Navbar/NavBar";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <NavBar />
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
    </div>
  );
};

export default Home;
