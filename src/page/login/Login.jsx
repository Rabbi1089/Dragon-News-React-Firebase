import React, { useContext } from "react";
import NavBar from "../Shared/navbar/Navbar/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authprovider/Authprovider";

const Login = () => {
  const { LoginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location from login", location);
  const handleFormDate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    LoginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        //navigate
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error, error.message);
      });
  };

  return (
    <div className="bg-base-200">
      <NavBar />
      <div className="lg:w-2/5 md:w-3/4 mx-auto h-auto bg-white p-9 mt-3 rounded-lg ">
        <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleFormDate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center">
          Do not Have An Account ?
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
