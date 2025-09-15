import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white px-6 py-4 flex items-center justify-between shadow-md z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-red-600 tracking-wide cursor-pointer">
        MyFlix
      </div>

      {/* Links */}
      <ul className="flex space-x-6 text-sm font-medium">
        <li className="hover:text-red-500 cursor-pointer transition">Home</li>
        <li className="hover:text-red-500 cursor-pointer transition">Movies</li>
        <li className="hover:text-red-500 cursor-pointer transition">
          TV Shows
        </li>
        <li className="hover:text-red-500 cursor-pointer transition">
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
