// src/Signup.tsx
import React, { useState } from "react";

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
    // Handle form submission, e.g., send data to the server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-[#25883F] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Farmer Registration
      </h2>
      <div
        className="mb-6"
        style={{ backgroundColor: "#CBE86A", height: "2px" }}
      ></div>{" "}
      {/* Separating Div */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            style={{ borderColor: "#FF9933" }} // Using color for border
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            style={{ borderColor: "#FF9933" }} // Using color for border
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            style={{ borderColor: "#FF9933" }} // Using color for border
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            District
          </label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            style={{ borderColor: "#FF9933" }} // Using color for border
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone No
          </label>
          <input
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            style={{ borderColor: "#FF9933" }} // Using color for border
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            style={{ borderColor: "#FF9933" }} // Using color for border
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Farmer Generated Unique ID
          </label>
          <input
            type="text"
            name="uniqueID"
            value={formData.uniqueID}
            onChange={handleChange}
            required
            pattern="[A-Za-z0-9]{6}"
            title="6 Capital Digits (numbers & letters)"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            style={{ borderColor: "#FF9933" }} // Using color for border
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#FF9933] text-white p-2 rounded-md hover:bg-[#CBE86A]"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
