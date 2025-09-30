import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Browse</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">
              Movies
            </li>
            <li className="hover:text-white cursor-pointer transition">
              TV Shows
            </li>
            <li className="hover:text-white cursor-pointer transition">
              New & Popular
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-3">About</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition">
              Company Info
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Careers
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Press
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition">
              Help Center
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact Us
            </li>
            <li className="hover:text-white cursor-pointer transition">FAQ</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Terms of Use
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Cookie Policy
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MyFlix, Inc. was built by Rafael Cordova.
      </div>
    </footer>
  );
};

export default Footer;
