import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const AddCrops = () => {
  const [formData, setFormData] = useState({
    CropName: "",
    HarvestSeason: "",
    QtyPerSeason: "",
    PricePerKg: "",
    CropVariety: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/crops/add_crop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cropName: formData.CropName,
          harvestSeason: formData.HarvestSeason,
          qtyPerSeason: formData.QtyPerSeason,
          pricePerKg: formData.PricePerKg,
          farmerId: userRetrieve.id,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        if (result) {
          setFormData({
            CropName: "",
            HarvestSeason: "",
            QtyPerSeason: "",
            PricePerKg: "",
            CropVariety: "",
          });
        }
      } else {
        const errRes = await response.json();
        console.log(errRes);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center align-middle w-full">
      {" "}
      <form
        onSubmit={handleSubmit}
        className="w-[700px] md:mt-[50px] max-sm:w-[350px] border-[1px] border-[#25883F] space-y-[14px]  bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl max-sm:text-[17px] font-bold mb-6 text-center text-[#ff9933]">
          Add New Crop
        </h2>
        <div className="sm:grid sm:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:space-y-[7px] sm:gap-4 mb-4">
          <div>
            <select
              value={formData.CropName}
              onChange={handleChange}
              required
              name="CropName"
              title="select"
              className=" p-[6px] mt-[10px]  border text-sm max-sm:text-[13px] text-gray-700 border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            >
              <option value="" className="text-gray-500  max-sm:text-[7px] p-0">
                Select Crop Name
              </option>
              <option value="Maize" className="max-sm:text-[7px] p-0">
                Maize (Corn)
              </option>
              <option value="Oilseeds" className="max-sm:text-[7px] p-0">
                Oilseeds (Sunflower)
              </option>
              <option value="Peanuts" className="max-sm:text-[7px] p-0">
                Peanuts (Groundnuts)
              </option>
              <option value="Soybeans" className="max-sm:text-[7px] p-0">
                Soybeans
              </option>
              <option value="Rice" className="max-sm:text-[7px] p-0">
                Rice
              </option>
              <option value="wheat" className="max-sm:text-[7px] p-0">
                wheat
              </option>
              <option value="Cotton" className="max-sm:text-[7px] p-0">
                Cotton
              </option>
              <option value="Coffee" className="max-sm:text-[7px] p-0">
                Coffee
              </option>{" "}
              <option value="Tea" className="max-sm:text-[7px] p-0">
                Tea
              </option>
              <option value="Fruits" className="max-sm:text-[7px] p-0">
                Fruits
              </option>
            </select>
          </div>
          <div>
            <select
              value={formData.HarvestSeason}
              onChange={handleChange}
              name="HarvestSeason"
              required
              title="select"
              className=" p-[6px] mt-[10px] border text-sm max-sm:text-[13px] text-gray-700 border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            >
              <option value="" className="max-sm:text-[7px] text-gray-500 p-0">
                Select Harvest Season
              </option>
              <option value="Spring" className="max-sm:text-[7px] p-0">
                Spring
              </option>
              <option value="Summer" className="max-sm:text-[7px] p-0">
                Summer
              </option>
              <option value="Autumn" className="max-sm:text-[7px] p-0">
                Autumn
              </option>
              <option value="Winter" className="max-sm:text-[7px] p-0">
                Winter
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="CropVariety"
              className="block text-sm font-medium text-gray-700"
            >
              Crop Variety
            </label>
            <input
              type="text"
              name="CropVariety"
              id="CropVariety"
              value={formData.CropVariety}
              onChange={handleChange}
              required
              className="mt-1 p-[6px] border placeholder:text-[12px] w-full max-sm:text-[17px] border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            />
          </div>
          <div>
            <label
              htmlFor="PricePerKg"
              className="block text-sm font-medium text-gray-700"
            >
              Price Per Kg
            </label>
            <input
              type="tel"
              name="PricePerKg"
              id="PricePerKg"
              placeholder="USD"
              value={formData.PricePerKg}
              onChange={handleChange}
              required
              className="mt-1 p-[6px] placeholder:text-[12px] border max-sm:text-[13px] border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <label
            htmlFor="QtyPerSeason"
            className="block text-sm font-medium text-gray-700"
          >
            Harvest Qty
          </label>
          <input
            type="number"
            name="QtyPerSeason"
            id="QtyPerSeason"
            value={formData.QtyPerSeason}
            onChange={handleChange}
            placeholder="Kilograms"
            required
            className="mt-1 p-[6px] border placeholder:text-[12px] max-sm:text-[17px] border-gray-300 rounded-md w-[330px] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
            style={{ borderColor: "#FF9933" }}
          />
        </div>
        <div className="flex flex-row space-x-[20px] items-center justify-center">
          <button
            type="submit"
            className="w-[200px] bg-[#FF9933] md:mt-[10px] max-sm:w-[100px] max-sm:p-[4px] max-sm:text-[13px] font-bold text-white p-[6px] rounded-md hover:bg-[#CBE86A] transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCrops;
