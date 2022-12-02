import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useCheckAdmin from "../hooks/useCheckAdmin";
import useCheckBuyer from "../hooks/useCheckBuyer";
import useCheckSeller from "../hooks/useCheckSeller";

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useCheckAdmin(user?.email);
  const [isSeller] = useCheckSeller(user?.email);
  const [isBuyer]= useCheckBuyer(user?.email)

  const handleLogout = () => {
    logOut().then((data) => {});
  };
  //
  const navbarItems = (
    <>
      <li>
        <Link to="/"> Home</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
          <li></li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  //
  return (
    <div>
      {/* navbar for dashboard */}
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

        <label
          htmlFor="drawer-dashboard"
          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center ml-5 my-3  drawer-button lg:hidden"
        >
          Dashboard
        </label>
      </div>

      {/* navbar for dashboard ends */}
      <div className="drawer drawer-mobile">
        <input
          id="drawer-dashboard"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex mt-5 justify-center">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer-dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
           
           {/* wrap buyers with  buyer route */}
           

            {isAdmin && (
                <>
                <li>
                <Link to="/dashboard/allusers">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/allsellers">All Sellers</Link>
              </li>
                </>
              
            )}

            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products </Link>
                </li>
              </>
            )}
            {isBuyer && (
              <>
                <li>
                  <Link to="/dashboard/myorders">My orders</Link>
                </li>
                
                
              </>
            )}

          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
