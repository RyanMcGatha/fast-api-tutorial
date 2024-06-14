import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link to="/" className="text-white text-lg">
            Home
          </Link>
        </li>
        <li>
          <Link to="/setup" className="text-white text-lg">
            Setup
          </Link>
        </li>

        <li>
          <Link to="/creating-routes" className="text-white text-lg">
            Creating Routes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
