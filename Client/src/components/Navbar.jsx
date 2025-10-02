import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  const handleRefresh = () => {
    navigate("/")
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white px-6 py-4 flex items-center justify-between shadow-md z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-red-600 tracking-wide cursor-pointer">
        <Link onClick={handleRefresh} className="hover:text-red-500 cursor-pointer transition px-6 py-2 md:py-0" to="/">
          MyFlix
        </Link>
      </div>

      {/* Hamburger menu for small screens */}
      <div
        className="md:hidden flex flex-col cursor-pointer space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-0.5 bg-white transition-transform" />
        <span className="w-6 h-0.5 bg-white transition-transform" />
        <span className="w-6 h-0.5 bg-white transition-transform" />
      </div>

      {/* Links */}
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full flex-col bg-black/90 md:bg-transparent md:static md:flex md:flex-row md:space-x-6 text-sm font-medium`}
      >
        <li>
          <Link onClick={handleRefresh} className="hover:text-red-500 cursor-pointer transition px-6 py-2 md:py-0" to="/">
            Home
          </Link>
        </li>
        <li className="hover:text-red-500 cursor-pointer transition px-6 py-2 md:py-0">
          Movies
        </li>
        <li >
          <Link className="hover:text-red-500 cursor-pointer transition px-6 py-2 md:py-0" to="/Admin">
            Admin
          </Link>
        </li>    
      </ul>

      {/* Profile */}
    </nav>
  );
};

export default Navbar;
