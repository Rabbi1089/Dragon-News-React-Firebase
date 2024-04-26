import Footer from "../../footer/Footer";
import Header from "../Shared/header/Header";
import NavBar from "../Shared/navbar/Navbar/NavBar";

const Career = () => {
  return (
    <div>
      <Header></Header>
      <div className="m-2 mx-auto">
        <NavBar></NavBar>
        <img
          className="mx-auto"
          src="https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg?t=st=1714155099~exp=1714158699~hmac=6fd6afc40b9c0dcde66a0ad174d997d8616d21d95639e587f80168199df7715e&w=740"
          alt=""
        />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Career;
