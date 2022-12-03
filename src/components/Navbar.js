import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const location = useLocation();
  const [activeMobile, setActiveMobile] = useState(false);

  return (
    <div className="fixed z-[9999] w-full h-[90px] flex justify-between items-center bg-white shadow-md text-md uppercase font-semibold text-gray-600">
      <div className="flex justify-center items-center pl-2">
        {location.pathname === "/" && (
          <Bars3Icon
            onClick={() => setActiveMobile(!activeMobile)}
            className="ml-5 md:hidden h-8 mr-3 cursor-pointer border hover:border-gray-400"
          />
        )}
        <Link to="/">
          <img className="w-[100px] md:mr-8" src="/images/logo.png" />
        </Link>
        {location.pathname === "/" && (
          <ul className="hidden md:flex gap-5">
            <li>
              <a className="hover:text-pink-600" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-pink-600" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-pink-600" href="#products">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-pink-600" href="#reviews">
                Reviews
              </a>
            </li>
            <li>
              <a className="hover:text-pink-600" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        )}
        {/* mobile nav */}
        {activeMobile && (
          <div className="w-full absolute -bottom-[265px] left-0 bg-zinc-200 z-[9999]">
            <ul className="w-full flex flex-col py-2">
              <li>
                <a
                  className="block bg-white py-2 px-5 mb-3 hover:text-pink-600"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="block bg-white py-2 px-5 mb-3 hover:text-pink-600"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="block bg-white py-2 px-5 mb-3 hover:text-pink-600"
                  href="#products"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="block bg-white py-2 px-5 mb-3 hover:text-pink-600"
                  href="#reviews"
                >
                  Review
                </a>
              </li>
              <li>
                <a
                  className="block bg-white py-2 px-5 hover:text-pink-600"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <ul className="flex gap-5 pr-7">
        <Link className="hover:text-pink-600" to="login">
          Login
        </Link>
        <Link className="hover:text-pink-600" to="register">
          Register
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
