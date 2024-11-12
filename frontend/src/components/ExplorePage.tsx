import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";
import farmerImage from "../assets/farmer.png";

const ExplorePage = () => {
  const farmers = [
    {
      Id: 1,
      FarmerName: "MUGISHA Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 2,
      FarmerName: "MUGISHA yves",
      District: "Rwanda",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 3,
      FarmerName: " Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 4,
      FarmerName: " yves",
      District: "Kenya",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 5,
      FarmerName: "MUGISHA Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 6,
      FarmerName: "MUGISHA yves",
      District: "Rwanda",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 7,
      FarmerName: " Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 8,
      FarmerName: " yves",
      District: "Kenya",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 9,
      FarmerName: "MUGISHA yves",
      District: "Rwanda",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 10,
      FarmerName: " Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 11,
      FarmerName: " yves",
      District: "Kenya",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 12,
      FarmerName: "MUGISHA Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 13,
      FarmerName: "MUGISHA yves",
      District: "Rwanda",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 14,
      FarmerName: " Pascal",
      District: "Burundi",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
    {
      Id: 15,
      FarmerName: " yves",
      District: "Kenya",
      HarvestSeason: "spring",
      QualityPerSeason: "2300kg",
      Contact: "0782256077",
      image: farmerImage,
    },
  ];
  return (
    <div className="bg-[#25883F] flex flex-col items-center justify-center w-full border-t-[1px] border-gray-400">
      <header className="p-[10px] w-full h-[90px] px-[20px] items-center flex flex-row justify-between">
        <RouterLink
          to="/"
          className="flex flex-row text-white space-x-[10px] items-center "
        >
          <div className="bg-[#4E9A61] p-[6px] hover:border-[1px] border-white rounded-full">
            <FaArrowLeft className="text-white" />
          </div>
          <p className="text-[14px] font-semibold">back</p>
        </RouterLink>
        <h2 className="font-bold text-white text-[22px]">Available farmers</h2>
        <div className="bg-white items-center max-md:hidden relative w-[348px] max-md:w-[200px] h-[42px] rounded-full flex flex-row p-0">
          <input
            type="text"
            placeholder="Search by District"
            id="email"
            className="focus:outline-none placeholder:text-gray-500 text-gray-600 placeholder:text-[12px] text-[12px] ml-[20px] w-[290px] h-[42px] bg-white"
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
      <main className="w-[1220px] mb-[10px] p-[5px] bg-[#4E9A61] rounded-[20px] ">
        <main className="farmersMain overflow-y-auto h-screen bg-[#4E9A61] m-[10px] rounded-[20px] w-[1200px] grid grid-cols-4 gap-[20px] p-[30px]">
          {farmers.map((farmer) => (
            <div
              key={farmer.Id}
              className="flex flex-col h-[280px] w-[250px] bg-[#1B7633]   p-[6px] rounded-[7px] space-y-[10px]"
            >
              <img
                src={farmer.image}
                alt="farmer image"
                className="rounded-[7px] h-[150px] w-full object-cover bg-cover "
              />

              <div className="flex flex-row text-[11px] text-white px-[14px] space-x-[10px]">
                <div className="flex flex-col space-y-[7px] items-start">
                  <b>Farmer Name :</b>
                  <b>District :</b>
                  <b>Harvest Season(s) :</b>
                  <b>Quality/Season :</b>
                  <b>Contact :</b>
                </div>
                <div className="flex flex-col space-y-[7px] items-start">
                  <p>{farmer.FarmerName}</p>
                  <p>{farmer.District}</p>
                  <p>{farmer.HarvestSeason}</p>
                  <p>{farmer.QualityPerSeason}</p>
                  <p>{farmer.Contact}</p>
                </div>
              </div>
            </div>
          ))}
        </main>
      </main>
    </div>
  );
};

export default ExplorePage;
