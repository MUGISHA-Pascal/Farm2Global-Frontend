import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:4000";
const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    district: "",
    phoneNo: "",
    role: "",
    password: "",
    registerCode: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    if (formData.registerCode !== "123456") {
      const RegisterCodeError = document.getElementById("RegisterCodeError");
      if (RegisterCodeError) {
        RegisterCodeError.innerHTML = "Register code not correct";
      }
    } else {
      const response = await fetch(`${baseUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: formData.firstName,
          lastname: formData.lastName,
          country: formData.country,
          district: formData.district,
          phoneNo: formData.phoneNo,
          password: formData.password,
          role: formData.role,
        }),
      });
      setFormData({
        firstName: "",
        lastName: "",
        country: "",
        district: "",
        role: "",
        phoneNo: "",
        password: "",
        registerCode: "",
      });
      if (response.ok) {
        interface farmer {
          message: "Farmer created";
          Farmer: {
            id: string;
            firstname: string;
            lastname: string;
            country: string;
            district: string;
            phoneNo: string;
          };
        }
        interface buyer {
          message: "buyer created";
          buyer: {
            id: string;
            firstname: string;
            lastname: string;
            phoneNo: string;
          };
        }
        const result: Promise<farmer | buyer> = await response.json();

        navigate("/login");
      }
    }
  };

  return (
    <div className="w-full h-full p-[20px] bg-[#25883F] flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[700px] max-sm:w-[350px]  bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl max-sm:text-[17px] font-bold mb-6 text-center text-[#25883F]">
          Customer Registration
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
          <div>
            <label className="block text-sm max-sm:text-[13px] font-medium text-gray-700">
              Registration Access Code
            </label>
            <input
              type="text"
              name="registerCode"
              id="registerCode"
              value={formData.registerCode}
              onChange={handleChange}
              required
              pattern="[A-Za-z0-9]{6}"
              title="6 Capital Digits (numbers & letters)"
              className="mt-1 p-[6px] border max-sm:text-[13px] border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            />
            <p className="text-red-500 text-sm" id="RegisterCodeError"></p>
          </div>

          <div>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              title="select"
              className=" p-[6px] mt-[10px] border text-sm max-sm:text-[13px] text-gray-700 border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            >
              <option value="" className="max-sm:text-[7px] p-0">
                Register as
              </option>
              <option value="farmer" className="max-sm:text-[7px] p-0">
                Farmer
              </option>
              <option value="buyer" className="max-sm:text-[7px] p-0">
                Buyer
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-row space-x-[20px] items-center justify-center">
          <button
            type="submit"
            className="w-[200px] bg-[#FF9933] max-sm:w-[100px] max-sm:p-[4px] max-sm:text-[13px] font-bold text-white p-[6px] rounded-md hover:bg-[#CBE86A] transition duration-300"
          >
            Register
          </button>
          <div className="text-[13px] max-sm:text-[10px]">
            <p className="inline text-gray-500">Already have an account </p>
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
