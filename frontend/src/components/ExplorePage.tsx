import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";
import farmerImage from "../assets/farmer.png";
import StarRating from "./StarRating";

const ExplorePage = () => {
  const [searchBy, setSearchBy] = useState("");
  const [search, setSearch] = useState("");

  const farmers = [
    {
      Id: 1,
      FarmerName: "MUGISHA Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 2,
      FarmerName: "MUGISHA yves",
      District: "Rwanda",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 3,
      FarmerName: " Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 4,
      FarmerName: " yves",
      District: "Kenya",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 5,
      FarmerName: "MUGISHA Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 6,
      FarmerName: "MUGISHA yves",
      District: "Rwanda",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 7,
      FarmerName: " Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 8,
      FarmerName: " yves",
      District: "Kenya",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 9,
      FarmerName: "MUGISHA yves",
      District: "Rwanda",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 10,
      FarmerName: " Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 11,
      FarmerName: " yves",
      District: "Kenya",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 12,
      FarmerName: "MUGISHA Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 13,
      FarmerName: "MUGISHA yves",
      District: "Rwanda",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 14,
      FarmerName: " Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
    {
      Id: 15,
      FarmerName: " yves",
      District: "Kenya",
      HarvestSeason: "spring",
      Country: "Rwanda",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
      price: "0.5USD/Kg",
    },
  ];
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
    case "Name":
      filteredFarmers =
        search === ""
          ? farmers
          : farmers.filter((item) =>
              item.FarmerName.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "Country":
      filteredFarmers =
        search === ""
          ? farmers
          : farmers.filter((item) =>
              item.Country.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "District":
      filteredFarmers =
        search === ""
          ? farmers
          : farmers.filter((item) =>
              item.District.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "Season":
      filteredFarmers =
        search === ""
          ? farmers
          : farmers.filter((item) =>
              item.HarvestSeason.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "Price":
      filteredFarmers =
        search === ""
          ? farmers
          : farmers.filter((item) =>
              item.price.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "Quality/season":
      filteredFarmers =
        search === ""
          ? farmers
          : farmers.filter((item) =>
              item.QualityPerSeason.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "Contact":
      filteredFarmers =
        search === ""
          ? farmers
          : farmers.filter((item) =>
              item.Contact.toLowerCase().includes(search.toLowerCase())
            );
      break;
    default:
      filteredFarmers = farmers;
      break;
  }
  return (
    <div className="bg-[#25883F] flex flex-col items-center justify-center w-full border-t-[1px] border-gray-400">
      <header className="p-[10px] max-md:grid max-md:grid-cols-2 max-md:gap-1 w-full max-md:h-[100px] h-[90px] md:px-[20px] max-md:px-[10px] md:items-center md:flex md:flex-row md:justify-between">
        <RouterLink
          to="/"
          className="flex flex-row text-white space-x-[10px] max-sm:space-x-[5px] items-center "
        >
          <div className="bg-[#4E9A61] p-[6px] hover:border-[1px] border-white rounded-full">
            <FaArrowLeft className="text-white max-sm:w-[10px] max-sm:h-[10px] " />
          </div>
          <p className="text-[14px] font-semibold max-sm:text-[10px]">back</p>
        </RouterLink>
        <h2 className="font-bold text-white text-[22px] max-sm:text-[17px]">
          Available farmers
        </h2>
        <div className="bg-white pl-[8px]  items-center  relative w-[466px] max-md:w-[350px] h-[42px] rounded-full flex flex-row p-0">
          <select
            title="select"
            value={searchBy}
            onChange={(e) => {
              setSearchBy(e.target.value);
            }}
            className="w-[110px] focus:outline-none border-[2px] p-[4px] rounded-full border-[#4E9A61] text-gray-500 text-[12px] "
          >
            <option value="" className="text-[12px] max-md:text-[7px] ">
              search by
            </option>
            <option value="Name" className="text-[12px] max-md:text-[7px]">
              Name
            </option>
            <option value="Country" className="text-[12px] max-md:text-[7px]">
              Country
            </option>
            <option value="District" className="text-[12px] max-md:text-[7px]">
              District
            </option>
            <option value="Season" className="text-[12px] max-md:text-[7px]">
              Season
            </option>
            <option
              value="Quality/season"
              className="text-[12px] max-md:text-[7px]"
            >
              Qty/season
            </option>
            <option value="Contact" className="text-[12px] max-md:text-[7px]">
              Contact
            </option>
            <option value="Price" className="text-[12px] max-md:text-[7px]">
              Price
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
            className="bg-[#4E9A61] h-[30px] w-[30px] flex flex-row items-center justify-center font-bold rounded-full hover:bg-opacity-80 text-white hover:border-white hover:border-[1px] text-[12px] "
          >
            <IoSearchSharp />
            <p className="text-[1px]">.</p>
          </button>
        </div>
      </header>
      <main className="w-[1220px] max-sm:w-full mb-[10px] p-[5px] bg-[#4E9A61] rounded-[20px] ">
        <main className="farmersMain overflow-y-auto h-screen bg-[#4E9A61] md:m-[10px] rounded-[20px] max-md:w-full w-[1200px] place-items-center grid md:grid-cols-4 max-sm:gap-[5px] max-md:grid-cols-2 max-md:p-[1px] gap-[20px] p-[30px]">
          {filteredFarmers.map((farmer) => (
            <div
              key={farmer.Id}
              className="flex flex-col items-center h-[417px] max-md:h-[290px] max-sm:w-[160px] w-[250px] bg-[#1B7633]   p-[6px] rounded-[7px] space-y-[10px]"
            >
              <img
                src={farmer.image}
                alt="farmer image"
                className="rounded-[7px] h-[150px] w-full max-sm:h-[90px] object-cover bg-cover "
              />

              <div className="flex flex-row w-full text-[11px] max-sm:text-[7px] text-white px-[14px] max-sm:space-x-[14px] md:justify-between">
                <div className="flex flex-col space-y-[4px] max-sm:space-y-[4px] items-start">
                  <b>Name :</b>
                  <b>Country :</b>
                  <b>District :</b>
                  <b>Harv.Season :</b>
                  <b>Qty/Season :</b>
                  <b>Price :</b>
                  <b>Contact :</b>
                </div>
                <div className="flex flex-col space-y-[4px] items-start">
                  <p>{farmer.FarmerName}</p>
                  <p>{farmer.Country}</p>
                  <p>{farmer.District}</p>
                  <p>{farmer.HarvestSeason}</p>
                  <p>{farmer.QualityPerSeason}</p>
                  <p>{farmer.price}</p>
                  <p>{farmer.Contact}</p>
                </div>
              </div>

              <div className="w-[170px] rounded-[10px] max-md:rounded-[7px] p-[5px] max-md:p-[3px] max-md:w-[110px] flex flex-col items-center bg-[#25883F] justify-center">
                <h2 className="font-semibold text-white max-md:text-[12px]">
                  Rate
                </h2>
                <StarRating />
              </div>
              <a
                href="#"
                className="bg-[#25883F] text-white font-semibold max-md:rounded-[7px] max-md:text-[10px] text-[15px]  max-md:w-[110px]  w-[170px] hover:opacity-50 rounded-[10px] p-[5px]"
              >
                Purchase products
              </a>
            </div>
          ))}
        </main>
      </main>
    </div>
  );
};

export default ExplorePage;
