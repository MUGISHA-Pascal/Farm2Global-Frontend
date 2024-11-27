import React, { useEffect, useState } from "react";
import leafImage from "../assets/leaf2.png";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import { GiThreeLeaves } from "react-icons/gi";
import { PiMedalLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { TbTargetArrow } from "react-icons/tb";
import { MdStars } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { BiSolidHappyAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import minimex from "../assets/minimex.png";
import { GrPrevious } from "react-icons/gr";
import monsalwa from "../assets/monsalwa.png";
import azam from "../assets/azam.png";
import { Link, Element } from "react-scroll";
import africa from "../assets/africa.png";
import adma from "../assets/adma.png";
import coffee from "../assets/coffee.png";
import cotton from "../assets/cotton.png";
import fruits from "../assets/fruits.png";
import maize from "../assets/maize.png";
import { FaGlobe } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import rice from "../assets/rice.png";
import wheat from "../assets/wheat.png";
import Countup from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Outlet } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="bg-[#25883F] mt-[94px]">
      <Outlet />
    </div>
  );
};

export default Homepage;
