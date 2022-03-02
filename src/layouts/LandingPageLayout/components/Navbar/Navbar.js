import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between md:px-20 px-4 items-center bg-yellow">
        <Link to="/">
          <div className="cursor-pointer">
            <img src="/static/images/logo.png" width="80px" />
          </div>
        </Link>
        <ul className="flex text-gray-dark font-medium space-x-8 items-center">
          <Link to="/about">
            <li className="hover:text-red">About</li>
          </Link>
          <Link to="/services">
            <li className="hover:text-red">Services</li>
          </Link>
          {/* <Link to="/auth">
            <li className="bg-red text-sm text-white px-4 py-1 rounded-md">
              Signup / Login
            </li>
          </Link> */}
        </ul>

        {/* <div className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
