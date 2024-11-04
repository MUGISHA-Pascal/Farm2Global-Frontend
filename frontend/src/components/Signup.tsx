import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    district: "",
    phoneNo: "",
    password: "",
    uniqueID: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full h-full p-[20px] bg-[#25883F] flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[700px] max-sm:w-[350px]  bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl max-sm:text-[17px] font-bold mb-6 text-center text-[#25883F]">
          Farmer Registration
        </h2>
        <div className="sm:grid sm:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:space-y-[7px] sm:gap-4 mb-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstname"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 p-[6px] border max-sm:text-[13px] border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 p-[6px] border max-sm:text-[17px] border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="mt-1 p-[6px] border max-sm:text-[17px] border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            />
          </div>
          <div>
            <label
              htmlFor="district"
              className="block text-sm font-medium text-gray-700"
            >
              District
            </label>
            <input
              type="text"
              name="district"
              id="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="mt-1 p-[6px] border max-sm:text-[17px] border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            />
          </div>
          <div>
            <label
              htmlFor="phoneNo"
              className="block text-sm font-medium text-gray-700"
            >
              Phone No
            </label>
            <input
              type="tel"
              name="phoneNo"
              id="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
              className="mt-1 p-[6px] border max-sm:text-[13px] border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm max-sm:text-[13px] font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 p-[6px] border max-sm:text-[13px] border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm max-sm:text-[13px] font-medium text-gray-700">
              Farmer Generated Unique ID
            </label>
            <input
              type="text"
              name="uniqueID"
              id="uniqueID"
              value={formData.uniqueID}
              onChange={handleChange}
              required
              pattern="[A-Za-z0-9]{6}"
              title="6 Capital Digits (numbers & letters)"
              className="mt-1 p-[6px] border max-sm:text-[13px] border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            />
          </div>
        </div>
        <div className="flex flex-row space-x-[20px] items-center justify-center">
          <button
            type="submit"
            className="w-[200px] bg-[#FF9933] max-sm:text-[17px] font-bold text-white p-[6px] rounded-md hover:bg-[#CBE86A] transition duration-300"
          >
            Register
          </button>
          <div className="text-[13px]">
            <p className="inline text-gray-500">don't have an account </p>
            <RouterLink
              to="/login"
              className="hover:text-green-300 underline text-green-400 hover:cursor-pointer"
            >
              Login
            </RouterLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
