import { useContext } from "react";
import News from "../../news/News";
import NewsCart from "../../news/NewsCart/NewsCart";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/header/Header";
import LeftSideNav from "../Shared/leftSideNav/LeftSideNav";
import NavBar from "../Shared/navbar/Navbar/NavBar";
import BreakingNews from "./BreakingNews";
import { AuthContext } from "../../authprovider/Authprovider";
import { useLoaderData } from "react-router-dom";
import Footer from "../../footer/Footer";

const Home = () => {
  // const authInfo = useContext(AuthContext);
  // console.log(authInfo);
  // const news = useLoaderData();
  // console.log(news);
  return (
    <div>
      <Header />
      <BreakingNews />
      <NavBar />
      <div className="grid  lg:grid-cols-4 grid-cols-1 gap-4">
        <div className="border">
          <LeftSideNav />
        </div>
        <div className="border md:col-span-2">
          <NewsCart />
        </div>
        <div className="border">
          <RightSideNav />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
