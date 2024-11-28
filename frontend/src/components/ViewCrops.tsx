import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdSystemUpdateAlt } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import CropImage from "../assets/crop.jpeg";
import UpdateCropModal from "./UpdateCropModal";
import NotFoundImage from "../assets/notFound.png";

const ViewCrops = () => {
  const [searchBy, setSearchBy] = useState("");
  const [search, setSearch] = useState("");
  const [showModal, setModalShow] = useState(false);
  const [result, setResult] = useState([
    // {
    //   id: "",
    //   cropName: "",
    //   harvestSeason: "",
    //   qtyPerSeason: 0,
    //   pricePerKg: 0,
    //   cropOwner: 0,
    // },
  ]);
  interface CropInterface {
    id?: string;
    cropName: string;
    harvestSeason: string;
    qtyPerSeason: number;
    pricePerKg: number;
    cropOwner: number;
  }

  interface user {
    id: string;
    firstname: string;
    lastname: string;
    country: string;
    district: string;
    phoneNo: string;
    role: string;
    profilePhoto: string;
  }
  let userRetrieve: user = {
    id: "",
    firstname: "",
    lastname: "",
    country: "",
    district: "",
    phoneNo: "",
    profilePhoto: "",
    role: "",
  };
  interface userint {
    message: string;
    user: {
      id: string;
      firstname: string;
      lastname: string;
      country: string;
      district: string;
      phoneNo: string;
      role: string;
      profilePhoto: string;
    };
  }

  const userLocalStorage = localStorage.getItem("user");
  if (userLocalStorage) {
    let { result }: { result: userint } = JSON.parse(userLocalStorage);
    userRetrieve = result.user;
  }
  const DeleteCrop = async (cropId: string) => {
    const response = await fetch(
      `http://localhost:4000/crops/delete_crop/${cropId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      console.log("working");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      let farmerId = userRetrieve.id;
      const response = await fetch(
        `http://localhost:4000/crops/get_all_crops/${farmerId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        let resultAvailable = await response.json();
        setResult(resultAvailable);
      } else {
        const err = await response.json();
        console.log(err);
      }
    };
    fetchData();
  });
  let filteredCrops;
  switch (searchBy) {
    case "CropName":
      filteredCrops =
        search === ""
          ? result
          : result.filter((item: CropInterface) =>
              item.cropName.toLowerCase().includes(search.toLowerCase())
            );
      break;
    case "harvestSeason":
      filteredCrops =
        search === ""
          ? result
          : result.filter((item: CropInterface) =>
              item.harvestSeason.toString().includes(search.toLowerCase())
            );
      break;
    case "qtyPerSeason":
      filteredCrops =
        search === ""
          ? result
          : result.filter((item: CropInterface) =>
              item.qtyPerSeason.toString().includes(search.toLowerCase())
            );
      break;
    case "pricePerKg":
      filteredCrops =
        search === ""
          ? result
          : result.filter((item: CropInterface) =>
              item.pricePerKg.toString().includes(search.toLowerCase())
            );
      break;

    case "Quality/season":
      filteredCrops =
        search === ""
          ? result
          : result.filter((item: CropInterface) =>
              item.qtyPerSeason.toString().includes(search.toLowerCase())
            );
      break;

    default:
      filteredCrops = result;
      break;
  }
  return (
    <div className="h-screen   p-[10px] bg-white shadow rounded-[10px] flex flex-col items-center  w-full ">
      <header className="w-full flex h-[70px] items-center justify-center">
        <div className="bg-gray-200 pl-[8px]  items-center  relative w-[466px] max-md:w-[350px] h-[42px] rounded-full flex flex-row p-0">
          <select
            title="select"
            value={searchBy}
            onChange={(e) => {
              setSearchBy(e.target.value);
            }}
            className="w-[110px] focus:outline-none border-[2px] p-[4px] rounded-full border-[#FF9933] text-gray-500 bg-gray-200 text-[12px] "
          >
            <option value="" className="text-[12px] max-md:text-[7px] ">
              search by
            </option>
            <option value="CropName" className="text-[12px] max-md:text-[7px]">
              Crop Name
            </option>
            <option
              value="harvestSeason"
              className="text-[12px] max-md:text-[7px]"
            >
              harvest Season
            </option>
            <option
              value="qtyPerSeason"
              className="text-[12px] max-md:text-[7px]"
            >
              Qty Per Season
            </option>
            <option
              value="pricePerKg"
              className="text-[12px] max-md:text-[7px]"
            >
              Price Per Kg
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
            className="focus:outline-none max-sm:w-[190px] placeholder:text-gray-500 text-gray-600 placeholder:text-[12px] text-[12px] max-md:pl-[7px] max-md:ml-0 ml-[20px] w-[290px] h-[42px] bg-gray-200"
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
      <main className="w-full p-[7px] flex flex-col items-center m-[7px] h-[514px] shadow rounded-[10px] border-[1px] border-[#25883F]">
        {filteredCrops.length == 0 && (
          <div className="flex flex-col w-[300px] space-y-[30px] mt-[90px]">
            <h2 className="text-gray-700 text-[30px] font-semibold">
              No Crops Found
            </h2>
            <img
              src={NotFoundImage}
              className="w-[300px] "
              alt="not found image"
            />
          </div>
        )}
        <main className="farmersMain w-full h-[500px] rounded-[10px] grid grid-cols-4 gap-[30px] place-items-center overflow-y-auto">
          {filteredCrops.map((crop: CropInterface) => (
            <div className="w-[220px] hover:cursor-pointer border-gray-300 rounded border-[1px] h-auto pb-[10px] p-[5px] flex flex-col space-y-[15px] items-start shadow">
              {showModal && (
                <UpdateCropModal
                  cropId={crop.id ? crop.id : ""}
                  setModalShow={setModalShow}
                />
              )}

              <img
                src={CropImage}
                alt="lesson image"
                className="w-[210px] rounded shadow h-[190px]"
              />
              <div className="grid grid-cols-2 place-items-center w-full text-[12px]">
                <div className="flex flex-col items-end space-y-[5px]">
                  <p>CropName :</p>
                  <p>Harvest Season :</p>
                  <p>Qty Per Season :</p>
                  <p>Price Per Kg :</p>
                </div>
                <div className="flex flex-col space-y-[5px]">
                  <p>{crop.cropName}</p>
                  <p>{crop.harvestSeason}</p>
                  <p>{crop.qtyPerSeason}kg</p>
                  <p>{crop.pricePerKg}frw</p>
                </div>
              </div>
              <div className="w-[160px] flex flex-row justify-between ">
                <p className="text-gray-500 text-[10px]">10/20/2024</p>

                <div className="flex flex-row space-x-[10px]">
                  <MdSystemUpdateAlt
                    title="update"
                    className="text-[20px] text-[#25883F]"
                    onClick={() => {
                      setModalShow(true);
                    }}
                  />

                  <MdDeleteForever
                    title="delete"
                    className="text-[20px] text-[#25883F]"
                    onClick={() => {
                      if (crop.id) {
                        DeleteCrop(crop.id);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </main>
      </main>
    </div>
  );
};

export default ViewCrops;
