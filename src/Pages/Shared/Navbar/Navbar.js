import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout= ()=> {
    logOut()
    .then(data=> {})
  }
  const navbarItems = (
    <>
      <li>
        <Link to="/"> Home</Link>
      </li>
     
      <li>
        <Link to='/blog'>Blog</Link>
      </li>

      {user ? (
        <>
         <li>
          <Link onClick={handleLogout}>Logout</Link>
        </li>
        <li>
         <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
         {user?.displayName}
        </li>
        </>
       
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">LaptopHunt</Link>
      </div>

      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal p-0">{navbarItems}</ul>
      </div>

      

    </div>
  );
};

export default Navbar;
