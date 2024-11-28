import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link as RouterLink, useParams } from "react-router-dom";
import farmerImage from "../assets/farmer.png";
import StarRating from "./StarRating";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";
import NotFoundImage from "../assets/notFound.png";
const ExplorePage = () => {
  const [searchBy, setSearchBy] = useState("");
  const [search, setSearch] = useState("");
  const [CurrentPage, setCurrent] = useState(1);
  const [farmers, setFarmers] = useState([
    {
      country: "",
      createdAt: "",
      district: "",
      firstname: "",
      id: 0,
      lastname: "",
      password: "",
      phoneNo: "",
      profilePhoto: "",
      ratingAverage: 0,
      ratingCount: 0,
      subscriptionEndDate: null,
      subscriptionStartDate: null,
      updatedAt: "",
    },
  ]);

  interface farmerInterface {
    Id: number;
    FarmerName: string;
    District: string;
    HarvestSeason: string;
    QualityPerSeason: string;
    Contact: string;
    image: string;
  }
  let filteredFarmers;
  switch (searchBy) {
    case "FirstName":
      filteredFarmers =
        search === ""
          ? farmers
          : farmers.filter((item) =>
              item.firstname.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "LastName":
      filteredFarmers =
        search === ""
          ? farmers
          : farmers.filter((item) =>
              item.lastname.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "Country":
      filteredFarmers =
        search === ""
          ? farmers
          : farmers.filter((item) =>
              item.country.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "District":
      filteredFarmers =
        search === ""
          ? farmers
          : farmers.filter((item) =>
              item.district.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "PhoneNo":
      filteredFarmers =
        search === ""
          ? farmers
          : farmers.filter((item) =>
              item.phoneNo.toLowerCase().includes(search.toLowerCase())
            );
      break;
    default:
      filteredFarmers = farmers;
      break;
  }
  const totalNumberElements = 20;
  const lastIndex = CurrentPage * totalNumberElements;
  const firstIndex = lastIndex - totalNumberElements;
  let paginatedfilteredusers = filteredFarmers.slice(firstIndex, lastIndex);
  const totalNumberPages = Math.ceil(
    filteredFarmers.length / totalNumberElements
  );
  const handleNext = () => {
    if (CurrentPage < totalNumberPages) {
      setCurrent(CurrentPage + 1);
    }
  };
  const handleNumberClick = (pageNumber: number) => {
    setCurrent(pageNumber);
  };
  const handlePrevious = () => {
    if (CurrentPage > 1) {
      setCurrent(CurrentPage - 1);
    }
  };
  const scrolltoTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };
  const { category } = useParams<{ category: string }>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:4000/user/farmers/${category}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        let resultAvailable = await response.json();
        setFarmers(resultAvailable);
      } else {
        const err = await response.json();
        console.log(err);
      }
    };
    fetchData();
  });
  return (
    <div className="bg-[#25883F] flex flex-col items-center justify-center w-full border-t-[1px] border-gray-400">
      <div
        className="bg-[#ff9933] fixed max-md:right-[20px] max-md:bottom-[20px] bottom-[40px] rounded-full p-[10px] z-30 right-[40px]"
        onClick={scrolltoTop}
      >
        <MdOutlineKeyboardDoubleArrowUp className="text-white" />
      </div>
      <header className="p-[10px] max-md:grid max-md:grid-cols-2 max-md:gap-1 w-full max-md:h-[100px] h-[90px] md:px-[20px] max-md:px-[10px] md:items-center md:flex md:flex-row md:justify-between">
        <RouterLink
          to="/"
          className="flex flex-row text-white space-x-[10px] max-sm:space-x-[5px] items-center "
        >
          <div className="bg-[#FF9933] p-[6px] hover:border-[1px] border-white rounded-full">
            <FaArrowLeft className="text-white max-sm:w-[10px] max-sm:h-[10px] " />
          </div>
          <p className="text-[14px] font-semibold max-sm:text-[10px]">back</p>
        </RouterLink>
        <h2 className="font-bold text-[#FF9933] text-[22px] max-sm:text-[17px]">
          Available farmers
        </h2>
        <div className="bg-white pl-[8px]  items-center  relative w-[466px] max-md:w-[350px] h-[42px] rounded-full flex flex-row p-0">
          <select
            title="select"
            value={searchBy}
            onChange={(e) => {
              setSearchBy(e.target.value);
            }}
            className="w-[110px] focus:outline-none border-[2px] p-[4px] rounded-full border-[#FF9933] text-gray-500 text-[12px] "
          >
            <option value="" className="text-[12px] max-md:text-[7px] ">
              search by
            </option>
            <option value="FirstName" className="text-[12px] max-md:text-[7px]">
              firstname
            </option>
            <option value="LastName" className="text-[12px] max-md:text-[7px]">
              lastname
            </option>
            <option value="Country" className="text-[12px] max-md:text-[7px]">
              Country
            </option>
            <option value="District" className="text-[12px] max-md:text-[7px]">
              District
            </option>
            <option value="PhoneNo" className="text-[12px] max-md:text-[7px]">
              Phone No
            </option>
          </select>
          <input
            type="text"
            placeholder="Search"
            id="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="focus:outline-none max-sm:w-[190px] placeholder:text-gray-500 text-gray-600 placeholder:text-[12px] text-[12px] max-md:pl-[7px] max-md:ml-0 ml-[20px] w-[290px] h-[42px] bg-white"
          />
          <button
            type="submit"
            className="bg-[#FF9933] h-[30px] w-[30px] flex flex-row items-center justify-center font-bold rounded-full hover:bg-opacity-80 text-white hover:border-white hover:border-[1px] text-[12px] "
          >
            <IoSearchSharp />
            <p className="text-[1px]">.</p>
          </button>
        </div>
      </header>
      <main className="w-[1220px] max-sm:w-full mb-[10px]  p-[5px] flex flex-col items-center bg-[#ffffff] rounded-[20px] ">
        {paginatedfilteredusers.length == 0 && (
          <div className="flex flex-col space-y-[30px] mt-[140px]">
            <h2 className="text-gray-700 text-[30px] font-semibold">
              No Farmers Found
            </h2>
            <img
              src={NotFoundImage}
              className="w-[300px] "
              alt="not found image"
            />
          </div>
        )}
        <main className="farmersMain overflow-y-auto h-screen bg-white md:m-[10px] rounded-[20px] max-md:w-full w-[1200px] place-items-center grid md:grid-cols-4 max-sm:gap-[10px] max-md:grid-cols-2 max-md:p-[1px] gap-[20px] p-[30px]">
          {paginatedfilteredusers.map((farmer) => (
            <div
              key={farmer.id}
              className="flex flex-col items-center h-[424px] max-md:h-[290px] max-sm:w-[160px] w-[260px] bg-[#1B7633]   p-[6px] rounded-[7px] space-y-[10px]"
            >
              <img
                src={`http://localhost:4000/user/image/${farmer.profilePhoto}`}
                alt="farmer image"
                className="rounded-[7px] h-[200px] w-full max-md:h-[100px] object-cover bg-cover "
              />

              <div className="flex flex-col space-y-[4px] items-start text-[11px] max-sm:text-[7px] text-white">
                <div className="flex flex-row items-center space-x-2 justify-center">
                  <b>Name :</b>
                  <p>
                    {farmer.firstname} {farmer.lastname}
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-2  justify-center">
                  <b>Country :</b>
                  <p>{farmer.country}</p>
                </div>
                <div className="flex flex-row items-center space-x-2  justify-center">
                  <b>District :</b>
                  <p>{farmer.district}</p>
                </div>
                <div className="flex flex-row items-center space-x-2  justify-center">
                  <b>Contact :</b>
                  <p>{farmer.phoneNo}</p>
                </div>
              </div>
              <div className="w-[140px] rounded-[10px] max-md:rounded-[7px] p-[5px] max-md:p-[3px] max-md:w-[110px] flex flex-col items-center bg-[#25883F] justify-center">
                <StarRating
                  farmerId={farmer.id}
                  ratingAv={farmer.ratingAverage}
                />
              </div>
              <a
                href="#"
                className="bg-[#FF9933] text-white font-normal max-md:rounded-[7px] max-md:text-[10px] text-[15px]  max-md:w-[110px]  w-[140px] hover:opacity-50 rounded-[10px] p-[5px]"
              >
                BUY PRODUCT
              </a>
            </div>
          ))}
        </main>
        <div className="flex flex-row ml-[530px] space-x-[10px] font-bold text-white max-sm:ml-[130px] items-center text-[10px]">
          <GrFormPrevious
            onClick={handlePrevious}
            className="font-bold text-[35px] text-[#1B7633]"
          />
          {Array.from(
            { length: totalNumberPages },
            (_, index) => index + 1
          ).map((PageNumber) => (
            <button
              key={PageNumber}
              onClick={() => {
                handleNumberClick(PageNumber);
              }}
              className={`w-[30px] h-[30px] rounded-full max-sm:text-[7px] ${
                CurrentPage === PageNumber
                  ? "bg-[#FF9933]"
                  : "bg-[#ff9933] opacity-50"
              }`}
            >
              {PageNumber}
            </button>
          ))}
          <MdOutlineNavigateNext
            className="font-bold text-[40px] text-[#1B7633]"
            onClick={handleNext}
          />
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;
