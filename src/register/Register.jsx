import { Link } from "react-router-dom";
import NavBar from "../page/Shared/navbar/Navbar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../authprovider/Authprovider";
import { Result } from "postcss";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);
    //createUser
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error, error.message);
      });
  };

  return (
    <div className="bg-base-200">
      <NavBar />
      <div className="lg:w-2/5 md:w-3/4 mx-auto h-auto bg-white p-9 mt-3 rounded-lg ">
        <h1 className="text-5xl font-bold text-center">Register now!</h1>
        <form onSubmit={handleRegistration} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
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
          Have An Account ?
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
