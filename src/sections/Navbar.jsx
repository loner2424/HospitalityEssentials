import React, { useState } from "react";
import useScrollingHeader from "../hooks/useScrollingHeader";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerClassName = useScrollingHeader();

  return (
    <nav className={` ${headerClassName} fixed top-0 left-0 w-full font-inter`}>
      <div className="max-w- 7xl mx-auto px-4 py-3 lg:flex justify-between items-center">
        {/* Logo */}
        <div className="flex lg:block justify-between items-center lg:pl-14">
          <div className="uppercase">
            <p href="#" className="text-  black flex-col text-lg font-bold">
              Hospitality
            </p>
            <p href="#" className="tex t-black text-lg -my-2 font-bold">
              Essentials
            </p>
          </div>

          {/* Hamburger Icon for mobile */}
          <div className=" lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M3 5h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="list-reset lg:flex justify-end font-medium flex-1 lg:font-semibold uppercase items-center font-lato ">
          <li className="mr-3 md:pt-0 pt-8">
              <a
                href="/about"
                className="text- black flex justify-center h over:text-gray-700  md:py-2 md:px-2 "
              >
               About
              </a>
            </li>
            <li className="mr-3">
              <a
                href="#"
                className="text- black flex justify-center h over:text-gray-700    md:px-2 "
              >
                Services
              </a>
            </li>
            <li className="mr-3">
              <a
                href="#"
                className="text- black flex justify-center h over:text-gray-700   md:px-2"
              >
                Clients
              </a>
            </li>
            {/* <li className="mr-3">
              <a
                href="#"
                className="text- black h over:text-gray-700 flex justify-center  md:px-2 "
              >
                Gallery
              </a>
            </li> */}
            
            <li className="mr-3">
              <a
                href="#"
                className="text- black h over:text-gray-700 flex justify-center  md:px-2 "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
