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
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { TbBrandFacebook } from "react-icons/tb";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { BiSolidHappyAlt } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa6";
import minimex from "../assets/minimex.png";
import { GrPrevious } from "react-icons/gr";
import monsalwa from "../assets/monsalwa.png";
import azam from "../assets/azam.png";
import africa from "../assets/africa.png";
import adma from "../assets/adma.png";
import coffee from "../assets/coffee.png";
import cotton from "../assets/cotton.png";
import fruits from "../assets/fruits.png";
import maize from "../assets/maize.png";
import { GrNext } from "react-icons/gr";
import rice from "../assets/rice.png";
import wheat from "../assets/wheat.png";
import { CiMenuBurger } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";
const Homepage = () => {
  const [navShow, setNavShow] = useState(false);
  const [currentState, setCurrentState] = useState(0);
  const slides = [
    { image: coffee, name: "Coffee farmers" },
    { image: cotton, name: "Cotton farmers" },
    { image: fruits, name: "Fruits farmers" },
    { image: maize, name: "Maize farmers" },
    { image: rice, name: "Rice farmers" },
    { image: wheat, name: "Wheat farmers" },
  ];
  const Next = () => {
    setCurrentState((prevstate) =>
      prevstate === slides.length - 1 ? 0 : prevstate + 1
    );
  };
  const Previous = () => {
    setCurrentState((prevstate) =>
      prevstate === 0 ? slides.length - 1 : prevstate - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className="bg-[#102d11]">
      <nav className="bg-[#102d11] border-b-[1px] border-gray-400 mx-[50px] text-white py-4">
        <div className="container max-md:px-[10px] mx-auto  px-[70px] pt-[20px] flex justify-between items-center">
          <div className="text-2xl max-sm:text-[13px] max-md:text-[15px] max-md:font-bold font-semi-bold text-white">
            Farmers2Global
          </div>
          <CiMenuBurger
            className="max-md:flex hidden"
            onClick={() => {
              setNavShow(true);
            }}
          />
          {navShow && (
            <div className="flex pb-[20px] flex-col space-y-[10px] w-[160px] rounded-[10px] right-[10px] absolute items-end z-10 border-[1px] border-gray-300 p-[16px] top-[40px] bg-[#102d11]">
              <VscChromeClose
                className="hover:text-green-300"
                onClick={() => {
                  setNavShow(false);
                }}
              />
              <ul className="flex space-x-[10px] items-center w-full flex-col space-y-[10px] font-normal text-[12px] text-gray-300">
                <li>
                  <a href="#" className="hover:text-green-300">
                    About Us
                  </a>
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
                    Crops Cartegories
                  </a>
                </li>
              </ul>
            </div>
          )}
          <ul className="flex space-x-6 max-md:hidden font-normal text-gray-300 text-[14px]">
            <li>
              <a href="#" className="hover:text-green-300">
                About Us
              </a>
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
                Crops Cartegories
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="bg-[#102d11] flex flex-row  text-white">
        <div className="container mx-auto px-4 pt-20 max-md:pt-[40px] text-center">
          <div className="flex pl-[90px] max-md:pl-[20px]">
            <h1 className="text-[60px] text-left inline w-[700px] max-md:w-[300px] max-md:text-[30px]">
              Welcome to the Future of Agriculture
            </h1>
            <button className="text-gray-300 max-md:text-[10px] w-[140px] space-x-[10px] items-center mt-[60px] flex flex-row">
              <p>Learn more</p>
              <BsFillArrowUpRightCircleFill className="w-[30px] hover:opacity-60 h-[30px] max-md:w-[20px] max-md:h-[20px] text-[#CBE86A]" />
            </button>
          </div>
          <div className="flex flex-row ml-[100px] max-sm:space-x-[50px] max-md:space-x-[120px] max-md:ml-[20px] space-x-[250px]">
            <p className=" text-[14px] max-md:text-[10px] max-md:w-[300px] w-[500px] text-left max-md:mt-[30px] mt-[50px]">
              Discover the cutting-edge world of agriculture where technology
              meets sustainability.Our mission is to revolutionilize farming for
              a brighter tomorrow.
            </p>
            <img
              src={leafImage}
              alt="leaf"
              className="w-[300px] h-[180px] mt-[30px] max-sm:mt-[80px] max-md:h-[75px] max-md:w-[130px] max-sm:w-[100px] max-sm:h-[55px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#CBE86A] flex flex-row max-md:flex-col max-md:pb-[10px]">
        <div className="h-[480px] w-[1400px] max-md:w-full max-md:h-[300px] relative">
          <img
            alt="image"
            src={slides[currentState].image}
            className={`h-[480px] w-[700px] max-md:h-[300px] absolute bg-url(${slides[currentState].image})`}
          />
          <GrPrevious
            onClick={Previous}
            className="absolute text-[#CBE86A] max-md:top-[90px] top-[190px] left-[10px] text-[30px] hover:cursor-pointer"
          />
          <GrNext
            onClick={Next}
            className="absolute text-[#CBE86A] text-[30px] max-md:top-[90px] top-[190px] right-[10px] hover:cursor-pointer"
          />
          <div className="absolute space-x-[17px] max-md:space-x-[14px]  bg-[#102d11] max-md:w-[250px] max-md:h-[100px] w-[330px] h-[150px] bottom-[10px] max-md:bottom-[10px] left-[170px] max-sm:left-[70px] items-center flex flex-row pl-[10px] rounded-[15px]">
            <div className="bg-[#CBE86A] w-[4px] h-[120px] max-md:h-[75px] max-md:w-[2px] rounded-full"></div>
            <div className="flex flex-col">
              <h2 className="font-bold text-white max-md:text-[14px] text-[20px]">
                Farmers2Global
              </h2>
              <h2 className="font-bold text-white text-[15px] max-md:text-[12px]">
                {slides[currentState].name}
              </h2>
            </div>
            <button className="border-[1px] border-[#CBE86A] font-bold flex flex-row justify-center items-center hover:bg-[#CBE86A] hover:bg-opacity-20 space-x-[3px] max-md:text-[12px] max-md:w-[75px] text-[#CBE86A] w-[100px] p-[4px] max-md:p-[3px] rounded-full">
              <p>Explore</p>
              <GoArrowUpRight />
            </button>
          </div>
        </div>
        <div className="bg-[#CBE86A] px-4 w-full flex flex-col space-y-[40px] pl-[60px] max-md:pl-0 items-start max-md:items-center">
          <h2 className="text-[25px] font-semibold text-center mt-[30px] max-md:text-[17px] max-md:mt-[20px]">
            Modern and Futuristic Benefits
          </h2>
          <div className="flex flex-col text-center space-y-[30px]">
            <div>
              <div className="flex flex-row space-x-[10px] items-center">
                <HiOutlineLightBulb className="w-[20px] h-[20px] max-md:h-[13px] max-md:w-[13px] " />
                <h3 className="text-[17px] font-semibold max-md:text-[13px]">
                  Precision Farming
                </h3>
              </div>
              <p className="mt-2 text-[14px] max-md:text-[10px] max-md:w-[260px] w-[460px] text-left ml-[30px]">
                Enhance crop production through real-time monitoring and
                efficient resource management.
              </p>
            </div>
            <div>
              <div className="flex flex-row space-x-[10px] items-center">
                <SlSettings className="w-[20px] h-[20px] max-md:h-[13px] max-md:w-[13px]" />
                <h3 className="text-[17px] font-semibold max-md:text-[13px]">
                  Sustainable Innovations
                </h3>
              </div>
              <p className="mt-2 text-[14px] w-[460px] max-md:text-[10px] max-md:w-[260px] text-left ml-[30px]">
                Implement eco-friendly farming methods to reduce waste and
                increase sustainability.
              </p>
            </div>
            <div>
              <div className="flex flex-row space-x-[10px] items-center">
                <TbTargetArrow className="w-[20px] h-[20px] max-md:h-[13px] max-md:w-[13px]" />
                <h3 className="text-[17px] font-semibold max-md:text-[13px]">
                  Smart Automation
                </h3>
              </div>
              <p className="mt-2 text-[14px] w-[460px] max-md:text-[10px] max-md:w-[260px] text-left ml-[30px]">
                Utilize AI-driven automation to optimize farm operations and
                labor.
              </p>
            </div>
          </div>

          <p className="mt-2 text-[14px] w-[460px] max-md:text-[10px] max-md:ml-[140px] text-left ml-[30px]">
            learn more about what we are doing
          </p>
        </div>
      </section>

      <section className="py-20 max-md:py-[30px]">
        <div className="flex flex-row md:space-x-[200px] max-md:flex-col max-md:space-y-[30px]">
          <div className="flex flex-col space-y-[70px] max-md:space-y-[35px] pl-[150px] max-md:pl-[60px]">
            <div className="flex flex-col space-y-[20px]">
              <h1 className="text-[40px] text-white text-left inline w-[500px] leading-[50px] max-md:text-[17px]">
                Enable Local Farmers Go Global
              </h1>
              <p className=" text-[14px] w-[500px] max-md:w-[300px] text-white text-left mt-[50px] max-md:text-[10px]">
                By leveraging various existing Digital Technologies, Farm2Global
                is a game changer verified platform within agri-sector supply
                chain. It enhances trust and credibility within the agricultural
                sector, and offers a worldwide reach, allowing bulk buyers to
                easily access and connect with verified local farmers within the
                East African region without intervention of middlemen in the
                process.
              </p>
            </div>
            <div className="flex-col space-y-[20px] flex">
              <div className="flex flex-row w-[430px] max-md:w-[260px] items-center justify-start border-[#CBE86A] border-b-[1px]">
                <div className="flex flex-row space-x-[10px] ">
                  <MdStars className="text-[#CBE86A] w-[24px] h-[24px] max-md:w-[20px] max-md:h-[20px]" />
                  <h1 className="font-semibold text-[17px] text-white max-md:text-[12px]">
                    Our customers
                  </h1>
                </div>
                <p className="font-bold text-white text-[30px] ml-[150px] max-md:ml-[70px] max-md:text-[20px]">
                  1230
                </p>
              </div>
              <div className="flex flex-row w-[430px] max-md:w-[260px] items-center justify-start border-[#CBE86A] border-b-[1px]">
                <div className="flex flex-row space-x-[10px]">
                  <IoIosPeople className="text-[#CBE86A] w-[24px] h-[24px] max-md:w-[20px] max-md:h-[20px]" />
                  <h1 className="font-semibold text-[17px] text-white max-md:text-[12px]">
                    Farmers Cooperatives
                  </h1>
                </div>
                <p className="font-bold text-white text-[30px]  ml-[85px] max-md:ml-[30px] max-md:text-[20px]">
                  994
                </p>
              </div>
              <div className="flex flex-row w-[430px] max-md:w-[260px] items-center justify-start border-[#CBE86A] border-b-[1px]">
                <div className="flex flex-row space-x-[10px]">
                  <BiSolidHappyAlt className="text-[#CBE86A] w-[24px] h-[24px] max-md:h-[20px] max-md:w-[20px]" />
                  <h1 className="font-semibold text-[17px] text-white max-md:text-[12px]">
                    Happy Clients{" "}
                  </h1>
                </div>
                <p className="font-bold text-white text-[30px]  ml-[155px] max-md:ml-[82px] max-md:text-[20px]">
                  932
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-md:flex-row md:space-y-[70px] max-md:space-x-[30px] items-center max-md:w-full justify-center">
            <div className="flex flex-row space-x-[24px] max-md:space-x-[10px] items-center justify-center">
              <div className="bg-[#CBE86A] w-[4px] h-[220px] max-md:h-[170px] max-md:w-[2px] rounded-full"></div>
              <div className="flex flex-col items-center justify-center">
                <GiThreeLeaves className="w-[80px] h-[80px] text-white max-md:w-[40px] max-md:h-[40px]" />
                <h1 className="font-bold text-white text-[15px] max-md:text-[10px]">
                  100% Trusted Farmers
                </h1>
                <p className=" text-[12px] w-[200px] max-md:w-[120px] text-white max-md:text-[9px] text-left mt-[10px]">
                  Farmers registration process involved multiple steps including
                  Unique Digital ID issuance, Personal,Business and
                  Administrative documents verification and onsite visit to
                  ensure their credibility
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-[24px] max-md:space-x-[10px] items-center justify-center">
              <div className="bg-[#CBE86A] w-[4px] h-[220px] max-md:h-[170px] max-md:w-[2px] rounded-full"></div>
              <div className="flex flex-col items-center justify-center">
                <PiMedalLight className="w-[80px] h-[80px] text-white max-md:w-[40px] max-md:h-[40px]" />
                <h1 className="font-bold text-white text-[15px]  max-md:text-[10px]">
                  Awards and Recognition
                </h1>
                <p className=" text-[12px] w-[200px] max-md:w-[120px] text-white text-left mt-[10px] max-md:text-[9px]">
                  We have won various awards such as Digital ID For Africa where
                  we leveraged Digital ID to enhance digitization of Agriculture
                  sector. In addition, we are legally recognized by MINAGRI, RDB
                  and RCA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#CBE86A] flex flex-col space-y-[30px] md:py-[70px] max-md:py-[30px] md:px-[100px] max-md:items-center">
        <div className="flex flex-col space-y-[14px] md:space-y-[7px]">
          <h1 className="text-[40px] text-black text-left inline max-md:text-[17px] font-semibold">
            Our Partners
          </h1>
          <p className=" text-[14px] text-black text-left mt-[50px] max-md:text-[10px] ">
            Connecting East African local farmers with potential Buyers.
          </p>
        </div>
        <div className="md:flex md:flex-row md:space-x-[100px] max-md:grid max-md:grid-cols-5 max-md:gap-2 items-center">
          <img
            src={adma}
            alt="adma"
            className="w-[100px] h-auto max-md:w-[70px]"
          />
          <img
            src={africa}
            alt="africa"
            className="w-[100px] max-md:w-[70px] h-auto"
          />
          <img
            src={azam}
            alt="azam"
            className="w-[100px] h-auto max-md:w-[70px]"
          />
          <img
            src={monsalwa}
            alt="monsalwa"
            className="w-[100px] h-auto max-md:w-[70px]"
          />
          <img
            src={minimex}
            alt="minimex"
            className="w-auto h-[60px] max-md:w-[70px] max-md:h-auto"
          />
        </div>
      </section>
      <footer className="flex flex-row max-md:flex-col md:space-x-[70px] pl-[100px] max-md:pl-[30px] pb-[40px] pt-[30px]">
        <div className="md:flex md:flex-col md:space-y-[30px] max-md:grid max-md:grid-cols-2">
          <div className="flex flex-col max-md:space-y-[10px]">
            <h1 className="text-[20px] font-semibold max-md:text-[9px] text-white text-left inline w-[500px] md:leading-[50px]">
              Farmers2Global Advance
            </h1>
            <p className=" text-[12px] w-[450px] max-md:w-[140px] text-white text-left max-md:text-[7px]">
              Discover the cutting-edge World of agriculture where technology
              meets sustainability. Our mission is to revolutionilize farming
              for a brighter tomorrow
            </p>
          </div>
          <div className="flex flex-row max-md:flex-col md:space-x-[70px] max-md:space-y-[15px]">
            <div className="flex flex-row space-x-[10px] items-center">
              <BiPhoneCall className="bg-gray-700 p-[7px] shadow-md text-[30px] max-md:p-[3px] max-md:text-[20px] rounded-full text-white" />
              <div className="flex flex-col items-start">
                <p className="text-[10px] text-gray-400 max-md:text-[7px]">
                  Have a question ?
                </p>
                <p className="font-semibold text-[12px] max-md:text-[7px] text-white">
                  +(250)78-225-6907
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-[10px] items-center">
              <MdOutlineMailOutline className="bg-gray-700 p-[7px] shadow-md text-[30px] max-md:p-[3px] max-md:text-[20px] rounded-full text-white" />
              <div className="flex flex-col items-start">
                <p className="text-[10px] text-gray-400 max-md:text-[7px]">
                  Contact us at ?
                </p>
                <p className="font-semibold text-[12px] max-md:text-[7px] text-white">
                  farmz2global@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-[20px] space-x-[30px] text-[12px] max-md:text-[7px] max-md:hidden text-gray-400">
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
            <p className="text-[10px] text-gray-400 text-left max-md:text-[7px] max-md:w-[140px] w-[400px]">
              Be the first one to know about discounts , offers and events ,
              Unsubscribe whenever you like
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
              className="focus:outline-none placeholder:text-gray-500 text-gray-400 placeholder:text-[12px] text-[12px] ml-[30px] w-[345px] h-[42px] bg-gray-700"
            />
            <button className="bg-[#CBE86A] font-bold w-[70px] rounded-full hover:bg-opacity-80 text-[#102d11] hover:border-[#102d11] hover:border-[1px] text-[12px] h-[35px]">
              Submit
            </button>
          </div>
          <div className="flex flex-row space-x-[30px]">
            <p className="font-semibold text-[13px] mt-[5px] max-md:text-[7px] text-white">
              Follow us on social media
            </p>
            <div className="flex flex-col space-y-[20px]">
              <div className="flex flex-row space-x-[9px]">
                <TbBrandFacebook className="bg-gray-700 p-[7px] shadow-md text-[30px] max-md:p-[3px] max-md:text-[20px] rounded-full text-white" />
                <PiWhatsappLogoLight className="bg-gray-700 p-[7px] shadow-md text-[30px] max-md:p-[3px] max-md:text-[20px] rounded-full text-white" />
                <RiTwitterXFill className="bg-gray-700 p-[7px] shadow-md text-[30px] max-md:p-[3px] max-md:text-[20px] rounded-full text-white" />
              </div>
              <div className="text-[10px] max-md:text-[7px] text-gray-400 text-left flex flex-row items-center space-x-2 pt-[10px]">
                <FaRegCopyright />
                <p> 2024 , All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
