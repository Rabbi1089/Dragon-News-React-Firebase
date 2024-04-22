import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { VscTwitter } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa6";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h1 className="text-xl font-bold">Login With</h1>
        <button className="btn btn-outline w-full">
          <FcGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login With Github
        </button>
      </div>
      <div className="p-4 mb-6 ">
        <h1 className="text-xl font-bold mb-5">Find Us On</h1>
        <a
          className="flex p-4 text-lg items-center border rounded-t-lg"
          href=""
        >
          <CiFacebook />
          <span className="ml-3">facebook</span>
        </a>
        <a className="flex p-4 text-lg items-center border border-x" href="">
          <VscTwitter />
          <span className="ml-3">Twitter</span>
        </a>
        <a
          className="flex p-4 text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaInstagram />
          <span className="ml-3">Instagram</span>
        </a>
      </div>
      {/* Q-Zone */}
      <div className="p-4 space-y-3 mb-6">
        <h1 className="text-xl font-bold">Q-Zone</h1>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
