import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { TbBrandFacebook } from "react-icons/tb";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { Link, Element } from "react-scroll";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <Element
      name="contactUs"
      className="flex border-t-[1px] border-gray-400 flex-row max-md:flex-col md:space-x-[70px] pl-[100px] max-md:pl-[30px] pb-[40px] pt-[30px]"
    >
      <div className="md:flex md:flex-col md:space-y-[30px] max-md:grid max-md:grid-cols-2">
        <div className="flex flex-col max-md:space-y-[10px]">
          <h1 className="text-[20px] font-semibold max-md:text-[9px] text-white text-left inline w-[500px] md:leading-[50px]">
            Farm2Global
          </h1>
          <p className=" text-[12px] w-[450px] max-md:w-[140px] text-white text-left max-md:text-[7px]">
            Discover the world where agriculture meets technology for
            sustainability. Our mission is to revolutionize farming for our
            collective brighter future.
          </p>
        </div>
        <div className="flex flex-row max-md:flex-col md:space-x-[70px] max-md:space-y-[15px]">
          <div className="flex flex-row space-x-[10px] items-center">
            <BiPhoneCall className="bg-[#FF9933] p-[7px] shadow-md text-[30px] max-md:p-[3px] max-md:text-[20px] rounded-full text-white" />
            <div className="flex flex-col items-start">
              <p className="text-[10px] text-white font-bold max-md:text-[7px]">
                Have a question ?
              </p>
              <p className="text-[12px] max-md:text-[7px] text-white">
                +(250)78-225-6907
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-[10px] items-center">
            <MdOutlineMailOutline className="bg-[#FF9933] p-[7px] shadow-md text-[30px] max-md:p-[3px] max-md:text-[20px] rounded-full text-white" />
            <div className="flex flex-col items-start">
              <p className="text-[10px] font-bold text-white max-md:text-[7px]">
                Email Us
              </p>
              <p className=" text-[12px] max-md:text-[7px] text-white">
                farmz2global@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row pt-[20px] space-x-[30px] text-[12px] max-md:text-[7px] max-md:hidden text-white">
          <a href="#">About</a>
          <a href="#">Contact</a>

          <a href="#">Privacy policy</a>

          <a href="#">Sitemap</a>

          <a href="#">Terms of use</a>
        </div>
      </div>
      <div className="md:flex md:flex-col max-md:grid max-md:grid-cols-2 space-y-[20px] mt-[16px]">
        <div className="flex flex-col space-y-[12px] items-start">
          <h1 className="font-semibold text-[15px] max-md:text-[10px] text-white">
            Newsletter
          </h1>
          <p className="text-[10px] text-white text-left max-md:text-[7px] max-md:w-[140px] w-[400px]">
            Subscribe to know about discounts , offers and events , Unsubscribe
            whenever you like
          </p>
        </div>
        <div className="bg-gray-700 items-center max-md:hidden relative w-[450px] max-md:w-[200px] h-[42px] rounded-full flex flex-row p-0">
          <label htmlFor="email" className="absolute top-[12px] left-[7px]">
            <MdOutlineMailOutline className="text-gray-500 text-[18px]" />
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            id="email"
            className="focus:outline-none placeholder:text-gray-500 text-white placeholder:text-[12px] text-[12px] ml-[30px] w-[345px] h-[42px] bg-gray-700"
          />
          <button className="bg-[#FF9933] font-bold w-[70px] rounded-full hover:bg-opacity-80 text-[#25883F] hover:border-[#25883F] hover:border-[1px] text-[12px] h-[35px]">
            Submit
          </button>
        </div>
        <div className="flex flex-row space-x-[30px]">
          <p className="font-semibold text-[13px] mt-[5px] max-md:text-[7px] text-white">
            Follow us on social media
          </p>
          <div className="flex flex-col space-y-[20px]">
            <div className="flex flex-row space-x-[9px] max-sm:pr-[6px]">
              <TbBrandFacebook className="bg-[#FF9933] p-[7px] shadow-md text-[30px] max-md:p-[3px] max-md:text-[20px] rounded-full text-white" />
              <PiWhatsappLogoLight className="bg-[#FF9933] p-[7px] shadow-md text-[30px] max-md:p-[3px] max-md:text-[20px] rounded-full text-white" />
              <RiTwitterXFill className="bg-[#FF9933] p-[7px] shadow-md text-[30px] max-md:p-[3px] max-md:text-[20px] rounded-full text-white" />
            </div>
            <div className="text-[10px] max-md:text-[7px] text-white text-left flex flex-row items-center space-x-2 pt-[10px]">
              <FaRegCopyright />
              <p> 2024 , All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Footer;
