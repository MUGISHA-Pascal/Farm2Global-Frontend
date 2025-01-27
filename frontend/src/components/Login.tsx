import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Login: React.FC = () => {
  const baseUrl = "http://localhost:4000";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phoneNo: "",
    password: "",
    role: "",
  });
  const passwordError = document.getElementById("PasswordCodeError");
  const phoneError = document.getElementById("PhoneCodeError");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phoneNo: formData.phoneNo,
        password: formData.password,
        role: formData.role,
      }),
    });
    if (response.ok) {
      interface farmer {
        message: "Farmer found";
        user: {
          id: string;
          firstname: string;
          lastname: string;
          country: string;
          district: string;
          phoneNo: string;
        };
      }
      interface buyer {
        message: "buyer found";
        user: {
          id: string;
          firstname: string;
          lastname: string;
          phoneNo: string;
        };
      }
      let result: Promise<farmer | buyer> = await response.json();

      if (passwordError) {
        passwordError.innerHTML = "";
      }
      if (phoneError) {
        phoneError.innerHTML = "";
      }
      const token = Cookies.get("jwt");
      if (token) {
        localStorage.setItem("user", JSON.stringify({ result }));
        navigate("/dashboard");
      }
      console.log(document.cookie);
    } else {
      interface ErrorResponse {
        password?: string;
        phone?: string;
        code?: number;
        details?: Record<string, any>;
        errors: {
          username?: string;
          email?: string;
          password?: string;
        };
      }
      const errRes: ErrorResponse = await response.json();

      if (passwordError && errRes.password) {
        passwordError.innerHTML = errRes.password;
      }
      if (phoneError && errRes.phone) {
        phoneError.innerHTML = errRes.phone;
      }
    }
    setFormData({
      phoneNo: "",
      password: "",
      role: "",
    });
  };

  return (
    <div className="w-full mt-[97px] h-full p-[20px] bg-[#25883F] flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] max-sm:w-[350px] items-center  flex flex-col space-y-[10px] bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl max-sm:text-[17px] font-bold mb-6 text-center text-[#25883F]">
          Customer Login
        </h2>
        <div className="flex flex-col items-center justify-center w-full space-y-4">
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
              className="mt-1 p-[6px] w-[300px]  border max-sm:text-[13px] border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            />
            <p className="text-red-500 text-sm" id="PhoneCodeError"></p>
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
              className="mt-1 p-[6px] border max-sm:text-[13px] border-gray-300 rounded-md w-[300px] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            />
            <p className="text-red-500 text-sm" id="PasswordCodeError"></p>
          </div>
          <div>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              title="select"
              className=" p-[6px] mt-[10px]  border text-sm max-sm:text-[13px] text-gray-700 border-gray-300 rounded-md w-[300px] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              style={{ borderColor: "#FF9933" }}
            >
              <option value="" className="max-sm:text-[7px] p-0">
                Login as
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
        <button
          type="submit"
          className="w-[200px] bg-[#FF9933] max-sm:text-[17px] font-bold text-white p-[6px] rounded-md hover:bg-[#CBE86A] transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
