import { Link } from "react-router-dom";
import userDefaultPic from "../../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../../authprovider/Authprovider";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);

  const HandleLogout = () => {
    console.log("logout clicked");
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.error(error, error.message);
      });
  };

  const NavLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link to="/about">About</Link>
      </li>
      <li>
        {" "}
        <Link to="/Career">Career</Link>
      </li>
      <li>
        {" "}
        <Link to="/login">login</Link>
      </li>
      <li>
        {" "}
        <Link to="/register">SignUp</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        {/* {user && <p>{user.email}</p>} */}

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLink}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLink}</ul>
        </div>
        <div className="navbar-end gap-3">
          <div className="avatar">
            <div className="w-[41px] rounded-full">
              <img src={userDefaultPic} />
            </div>
          </div>
          {user ? (
            <button onClick={HandleLogout} className="btn">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-neutral">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
