import React, { useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
  const [navShow, setNavShow] = useState(false);
  const [categoryShow, setCategoryShow] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.target.closest(".dropdown-category")) {
        setCategoryShow(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-[#25883F]">
      {" "}
      <nav className="bg-[#25883F] border-b-[1px] border-gray-400 mx-[50px] text-white py-2">
        <div className="container max-md:px-[10px] mx-auto  px-[70px] pr-[40px] pt-[0px] flex justify-between items-center">
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
            <div className="flex pb-[20px] text-[#FF9933] flex-col space-y-[10px] w-[160px] rounded-[10px] right-[10px] absolute items-end z-10 border-[1px] border-gray-300 p-[16px] top-[40px] bg-[#25883F]">
              <VscChromeClose
                className="hover:text-green-300"
                onClick={() => {
                  setNavShow(false);
                }}
              />
              <ul className="flex space-x-[10px] items-center w-full flex-col space-y-[10px] font-normal text-[12px] text-gray-300">
                <li>
                  <RouterLink
                    to="/"
                    onClick={() => {
                      setNavShow(false);
                    }}
                    className="hover:text-green-300 hover:cursor-pointer"
                  >
                    Home
                  </RouterLink>
                </li>
                <li>
                  <Link
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    onClick={() => {
                      setNavShow(false);
                    }}
                    offset={0}
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
                    offset={0}
                    onClick={() => {
                      setNavShow(false);
                    }}
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
                    offset={0}
                    onClick={() => {
                      setNavShow(false);
                    }}
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
                      offset={0}
                      onClick={() => {
                        setNavShow(false);
                      }}
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
                      onClick={() => {
                        setNavShow(false);
                      }}
                      offset={0}
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
                <li>
                  <RouterLink
                    to="/signup"
                    onClick={() => {
                      setNavShow(false);
                    }}
                    className="hover:text-green-300 hover:cursor-pointer"
                  >
                    Sign up
                  </RouterLink>
                </li>
              </ul>
            </div>
          )}
          <ul className="flex font-bold text-[#FF9933] space-x-4 max-md:hidden  text-[13px]">
            <li>
              <RouterLink
                to="/"
                className="hover:text-green-300 hover:cursor-pointer"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <Link
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={0}
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
                offset={0}
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
                offset={0}
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
                  offset={0}
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
                  offset={0}
                  duration={500}
                  className="hover:text-green-300 hover:cursor-pointer"
                >
                  Contact us
                </Link>
              </li>
            </li>

            <li
              onClick={(e) => {
                e.stopPropagation();
                setCategoryShow(!categoryShow);
              }}
              className="flex flex-row space-x-[10px] dropdown-category items-center justify-center"
            >
              <a href="#" className="hover:text-green-300">
                Crops Categories
              </a>
              <IoMdArrowDropdown />
              {categoryShow && (
                <div className="absolute  z-10 p-[30px] items-start top-[80px] text-white rounded-[13px] border-[1px]  border-gray-300  bg-[#25883F] flex flex-col space-y-[10px]">
                  <a href="" className="hover:text-green-300 ">
                    Maize (Corn)
                  </a>
                  <a href="" className="hover:text-green-300">
                    Oilseeds (Sunflower)
                  </a>
                  <a href="" className="hover:text-green-300">
                    Peanuts (Groundnuts)
                  </a>
                  <a href="" className="hover:text-green-300">
                    Soybeans
                  </a>
                  <a href="" className="hover:text-green-300">
                    Rice
                  </a>
                  <a href="" className="hover:text-green-300">
                    Wheat
                  </a>
                  <a href="" className="hover:text-green-300">
                    Cotton
                  </a>
                  <a href="" className="hover:text-green-300">
                    Coffee
                  </a>
                  <a href="" className="hover:text-green-300">
                    Tea
                  </a>
                  <a href="" className="hover:text-green-300">
                    Fruits
                  </a>
                </div>
              )}
            </li>
            <li>
              <RouterLink
                to="/signup"
                className="hover:text-green-300 hover:cursor-pointer"
              >
                Sign up
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
