import { useParams } from "react-router-dom";
import Header from "../page/Shared/header/Header";
import RightSideNav from "../page/Shared/RightSideNav/RightSideNav";
import NavBar from "../page/Shared/navbar/Navbar/NavBar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <NavBar />
      <div className=" grid lg:grid-cols-4 md:gird-col-4 space-x-9">
        <div className=" col-span-3">
          <h1>{id}</h1>
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
