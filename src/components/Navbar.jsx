import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
    <li><NavLink to='/profile'>My Profile</NavLink></li>
  </>

  return (
    <div className="navbar bg-[#2a9d8f] text-white sticky top-0 z-50 backdrop-blur-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#2a9d8f] rounded-box z-50 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to={'/'} className="text-xl md:text-2xl">Mountain Trek</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? (<div className="flex justify-center items-center gap-2">
            <div className="tooltip tooltip-bottom z-50" data-tip={user.displayName}>
              <img className="w-12 h-12 object-cover rounded-full"
                alt=""
                src={user?.photoURL} />
            </div>
            <button onClick={logOut} className="btn text-lg bg-white text-[#2a9d8f]">Log Out</button>
          </div>) : (<Link to='/login' className="btn text-lg bg-white text-[#2a9d8f]">Login</Link>)
        }
      </div>
    </div>
  );
};

export default Navbar;