import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
const Navbar = () => {
  const [navShow, setNavShow] = useState(false);

  return (
    <div className="bg-[#25883F]">
      {" "}
      <nav className="bg-[#25883F] border-b-[1px] border-gray-400 mx-[50px] text-white py-2">
        <div className="container max-md:px-[10px] mx-auto  px-[70px] pt-[0px] flex justify-between items-center">
          <div className="flex flex-row space-x-[10px] items-center">
            <img src={logo} className="w-[100px] h-[80px]" alt="logo" />
            <p className="text-2xl max-sm:text-[13px] max-md:text-[15px] max-md:font-bold font-bold text-white">
              Farm2Global
            </p>
          </div>
          <CiMenuBurger
            className="max-md:flex hidden"
            onClick={() => {
              setNavShow(true);
            }}
          />
          {navShow && (
            <div className="flex pb-[20px] flex-col space-y-[10px] w-[160px] rounded-[10px] right-[10px] absolute items-end z-10 border-[1px] border-gray-300 p-[16px] top-[40px] bg-[#25883F]">
              <VscChromeClose
                className="hover:text-green-300"
                onClick={() => {
                  setNavShow(false);
                }}
              />
              <ul className="flex space-x-[10px] items-center w-full flex-col space-y-[10px] font-normal text-[12px] text-gray-300">
                <li>
                  <Link to="aboutUs" className="hover:text-green-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-green-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-300">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-300">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-300">
                    Crops Categories
                  </a>
                </li>
              </ul>
            </div>
          )}
          <ul className="flex space-x-6 max-md:hidden font-normal text-gray-300 text-[14px]">
            <li>
              <Link
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-green-300 hover:cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-green-300 hover:cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-green-300 hover:cursor-pointer"
              >
                Features
              </Link>
            </li>
            <li>
              <li>
                <Link
                  to="partners"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-green-300 hover:cursor-pointer"
                >
                  Partners
                </Link>
              </li>
            </li>
            <li>
              <li>
                <Link
                  to="contactUs"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-green-300 hover:cursor-pointer"
                >
                  Contact us
                </Link>
              </li>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Crops Categories
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
