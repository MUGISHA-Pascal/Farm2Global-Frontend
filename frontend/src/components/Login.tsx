import React, { useState } from "react";

const Login: React.FC = () => {
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
        className="w-[700px] max-sm:w-[350px] items-center  flex flex-col space-y-[10px] bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl max-sm:text-[17px] font-bold mb-6 text-center text-[#25883F]">
          Farmer Login
        </h2>
        <div className="flex flex-row items-center justify-center w-full space-x-4">
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
          </div>
        </div>
        <button
          type="submit"
          className="w-[200px] bg-[#FF9933] max-sm:text-[17px] font-bold text-white p-[6px] rounded-md hover:bg-[#CBE86A] transition duration-300"
        >
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
