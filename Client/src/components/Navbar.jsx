import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white px-6 py-4 flex items-center justify-between shadow-md z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-red-600 tracking-wide cursor-pointer">
        MyFlix
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
        <li className="hover:text-red-500 cursor-pointer transition px-6 py-2 md:py-0">
          Home
        </li>
        <li className="hover:text-red-500 cursor-pointer transition px-6 py-2 md:py-0">
          Movies
        </li>
        <li className="hover:text-red-500 cursor-pointer transition px-6 py-2 md:py-0">
          TV Shows
        </li>
        <li className="hover:text-red-500 cursor-pointer transition px-6 py-2 md:py-0">
          My List
        </li>
      </ul>

      {/* Profile */}
      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-red-500 transition">
        <span className="text-xs">U</span>
      </div>
    </nav>
  );
};

export default Navbar;
