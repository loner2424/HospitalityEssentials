import React, { useState } from "react";
import useScrollingHeader from "../hooks/useScrollingHeader";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/Logo/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerClassName = useScrollingHeader();

  return (
    <nav
      className={` ${headerClassName} fixed top-0 left-0 w-full font-inter drop-shadow-xl`}
    >
      <div className="max-w- 7xl mx-auto px-4 py-2 lg:flex justify-between items-center">
        {/* Logo */}
        <div className="flex lg:block justify-between items-center lg:pl-14">
          <div className="flex gap-2">
            <img src={Logo} className="size-12" />
            <div className="uppercase flex flex-col">
              <a href="/" className="text-  black flex-col text-lg font-bold">
                Hospitality
              </a>
              <a href="/" className="tex t-black text-lg -my-2 font-bold">
                Essentials
              </a>
            </div>
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
          } lg:flex lg:items-center lg:w-auto gap-3`}
        >
          <ul className="list-reset lg:flex justify-end font-medium flex-1 lg:font-semibold uppercase items-center font-lato ">

            <a
              id="hide-after-click"
              href="/about"
              className="w-1/5 text-center mx-4 text-md transition-none duration-500"
            >
              <div className="flex justify-center mx-auto w-fit px-2 relative cursor-pointer transition-none ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-[#005A9A] before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-[#005A9A] after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">ABOUT</div>
            </a>
            <a
              id="hide-after-click"
              href="/services"
              className="w-1/5 text-center mx-4 text-md transition-none duration-500"
            >
              <div className="flex justify-center mx-auto w-fit px-2 relative cursor-pointer transition-none ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-[#005A9A] before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-[#005A9A] after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">SERVICES</div>
            </a>
            <a
              id="hide-after-click"
              href="/clients"
              className="w-1/5 text-center mx-4 text-md transition-none duration-500"
            >
              <div className="flex justify-center mx-auto w-fit px-2 relative cursor-pointer transition-none ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-[#005A9A] before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-[#005A9A] after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">CLIENTS</div>
            </a>
            <a
              id="hide-after-click"
              href="/contact"
              className="w-1/5 text-center mx-4 text-md transition-none duration-500"
            >
              <div className="flex justify-center mx-auto w-fit px-2 relative cursor-pointer transition-none ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-[#005A9A] before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-[#005A9A] after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">CONTACT</div>
            </a>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
