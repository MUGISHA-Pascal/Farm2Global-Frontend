import React, { useContext, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import Cookies from "js-cookie";
import { AppContext } from "./AppContext";
const Navbar = () => {
  function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
  }

  const { jwt, setJwt } = useAppContext();
  const [navShow, setNavShow] = useState(false);
  const [categoryShow, setCategoryShow] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("jwt");
    setJwt("");
    localStorage.removeItem("user");
    navigate("/signup");
  };
  const token = Cookies.get("jwt");
  if (token) {
    setJwt(token);
  }
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
    <div className="bg-[#25883F] shadow fixed z-30 top-0 right-0 left-0">
      {" "}
      <nav className="bg-[#25883F] max-md:mx-[20px]  md:mx-[50px] text-white py-2">
        <div className="container max-md:px-[5px] mx-auto   pt-[0px] flex justify-between items-center">
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
            <div className="flex pb-[20px] text-white flex-col space-y-[10px] w-[160px] rounded-[10px] right-[10px] absolute items-end z-10 border-[1px] border-gray-300 p-[16px] top-[40px] bg-[#25883F]">
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
                    offset={-95}
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
                    offset={-95}
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
                    offset={-95}
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
                  <Link
                    to="partners"
                    spy={true}
                    smooth={true}
                    offset={-95}
                    onClick={() => {
                      setNavShow(false);
                    }}
                    duration={500}
                    className="hover:text-green-300 hover:cursor-pointer"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <RouterLink
                    to="/dashboard"
                    onClick={() => {
                      setNavShow(false);
                    }}
                    className="hover:text-green-300 hover:cursor-pointer"
                  >
                    Dashboard
                  </RouterLink>
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
          <ul className="flex font-semibold text-white space-x-4 max-md:hidden  text-[14px]">
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
                offset={-95}
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
                offset={-95}
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
                offset={-95}
                duration={500}
                className="hover:text-green-300 hover:cursor-pointer"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="partners"
                spy={true}
                smooth={true}
                offset={-95}
                duration={500}
                className="hover:text-green-300 hover:cursor-pointer"
              >
                Partners
              </Link>
            </li>
            {jwt && (
              <li>
                <RouterLink
                  to="/dashboard"
                  onClick={() => {
                    setNavShow(false);
                  }}
                  className="hover:text-green-300 hover:cursor-pointer"
                >
                  Dashboard
                </RouterLink>
              </li>
            )}

            <li
              onClick={(e) => {
                e.stopPropagation();
                setCategoryShow(!categoryShow);
              }}
              className="dropdown-category"
            >
              <div className="flex flex-row hover:cursor-pointer space-x-[10px]  items-center justify-center hover:text-green-300">
                <p>Crops Categories</p>
                <IoMdArrowDropdown />
              </div>
              {categoryShow && (
                <div className="absolute font-normal  z-40 p-[30px] items-start top-[70px]  text-[#CCD2E3] rounded-[10px] border-[1px]  border-gray-400  bg-[#25883F] flex flex-col space-y-[10px]">
                  <a
                    href=""
                    className="hover:text-green-300 flex flex-row space-x-[10px] items-center"
                  >
                    <IoMdArrowDropright /> <p>Maize</p>
                  </a>
                  <a
                    href=""
                    className="hover:text-green-300 flex flex-row space-x-[10px] items-center"
                  >
                    <IoMdArrowDropright /> <p>Sunflower</p>
                  </a>
                  <a
                    href=""
                    className="hover:text-green-300 flex flex-row space-x-[10px] items-center"
                  >
                    <IoMdArrowDropright /> <p>Groundnuts</p>
                  </a>
                  <a
                    href=""
                    className="hover:text-green-300 flex flex-row space-x-[10px] items-center"
                  >
                    <IoMdArrowDropright /> <p>Soybeans</p>
                  </a>
                  <a
                    href=""
                    className="hover:text-green-300 flex flex-row space-x-[10px] items-center"
                  >
                    <IoMdArrowDropright /> <p>Rice</p>
                  </a>
                  <a
                    href=""
                    className="hover:text-green-300 flex flex-row space-x-[10px] items-center"
                  >
                    <IoMdArrowDropright /> <p> Wheat</p>
                  </a>
                  <a
                    href=""
                    className="hover:text-green-300 flex flex-row space-x-[10px] items-center"
                  >
                    <IoMdArrowDropright /> <p> Cotton</p>
                  </a>
                  <a
                    href=""
                    className="hover:text-green-300 flex flex-row space-x-[10px] items-center"
                  >
                    <IoMdArrowDropright /> <p> Coffee</p>
                  </a>
                  <a
                    href=""
                    className="hover:text-green-300 flex flex-row space-x-[10px] items-center"
                  >
                    <IoMdArrowDropright /> <p> Tea</p>
                  </a>
                  <a
                    href=""
                    className="hover:text-green-300 flex flex-row space-x-[10px] items-center"
                  >
                    <IoMdArrowDropright /> <p> Fruits</p>
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
            {jwt && (
              <li onClick={logout}>
                <p className="hover:text-green-300 hover:cursor-pointer">
                  logout
                </p>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
