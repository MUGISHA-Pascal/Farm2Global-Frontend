import React, { useState } from "react";
import profileImage from "../assets/demoProfile.png";

const Profile = () => {
  interface user {
    id: string;
    firstname: string;
    lastname: string;
    country: string;
    district: string;
    phoneNo: string;
  }
  let userRetrieve: user = {
    id: "",
    firstname: "",
    lastname: "",
    country: "",
    district: "",
    phoneNo: "",
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
    };
  }
  const userLocalStorage = localStorage.getItem("user");
  if (userLocalStorage) {
    let { result }: { result: userint } = JSON.parse(userLocalStorage);
    userRetrieve = result.user;
  }
  const [user, setuser] = useState({
    id: userRetrieve.id,
    firstname: userRetrieve.firstname,
    lastname: userRetrieve.lastname,
    country: userRetrieve.country,
    district: userRetrieve.district,
    phoneNo: userRetrieve.phoneNo,
  });

  const userCurrently = {
    username: "pascal",
    email: "mugisha@gmail.com",
    phone_number: "0786493844",
    image: profileImage,
  };
  return (
    <div className="flex flex-col ">
      <main className="w-full flex flex-col items-center justify-center">
        <main className="flex rounded-[20px] border-[1px] border-[#25883F] w-[700px] py-[30px] shadow  mt-[20px] items-center space-y-[30px] flex-col ">
          <h2 className="text-2xl max-sm:text-[17px] font-bold mb-[7px] text-center text-[#25883F]">
            Edit Profile
          </h2>
          <img
            src={profileImage}
            alt="profile image"
            className="w-[100px] h-[100px] rounded-full"
          />
          <div className="grid gap-[20px] grid-cols-2">
            <div className="flex flex-col items-start space-y-[10px]">
              <label
                htmlFor="firstname"
                className="text-sm font-medium text-gray-700"
              >
                FirstName
              </label>
              <input
                id="firstname"
                value={user.firstname}
                type="text"
                className="w-[250px] text-[13px] text-gray-500 focus:outline-none border-[1px] border-gray-300 p-[5px] rounded-[10px]"
              />
            </div>
            <div className="flex flex-col items-start space-y-[10px]">
              <label
                htmlFor="lastname"
                className="text-sm font-medium text-gray-700"
              >
                LastName
              </label>
              <input
                id="lastname"
                value={user.lastname}
                type="text"
                className="w-[250px] text-[13px] text-gray-500 focus:outline-none border-[1px] border-gray-300 p-[5px] rounded-[10px]"
              />
            </div>
            <div className="flex flex-col items-start space-y-[10px]">
              <label
                htmlFor="phone_number"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone_number"
                value={user.phoneNo}
                type="text"
                className="w-[250px] text-[13px] text-gray-500 focus:outline-none border-[1px] border-gray-300 p-[5px] rounded-[10px]"
              />
            </div>
            <div className="flex flex-col items-start space-y-[10px]">
              <label
                htmlFor="country"
                className="text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                value={user.country}
                id="country"
                type="text"
                className="w-[250px] text-[13px] text-gray-500 focus:outline-none border-[1px] border-gray-300 p-[5px] rounded-[10px]"
              />
            </div>
            <div className="flex flex-col items-start space-y-[10px]">
              <label
                htmlFor="district"
                className="text-sm font-medium text-gray-700"
              >
                District
              </label>
              <input
                id="district"
                value={user.district}
                type="text"
                className="w-[250px] text-[13px] text-gray-500 focus:outline-none border-[1px] border-gray-300 p-[5px] rounded-[10px]"
              />
            </div>
            <div className="flex flex-col items-start space-y-[10px]">
              <label
                htmlFor="fileInput"
                className="text-sm font-medium text-gray-700"
              >
                Upload an image:
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="fileInput"
                  name="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                <button
                  type="button"
                  className="w-[200px] bg-[#FF9933] md:mt-[10px] max-sm:w-[100px] max-sm:p-[4px] max-sm:text-[13px] font-bold text-white p-[6px] rounded-md hover:bg-[#CBE86A] transition duration-300"
                >
                  Choose File
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-[150px] bg-[#FF9933] md:mt-[10px] max-sm:w-[100px] max-sm:p-[4px] max-sm:text-[13px] font-bold text-white p-[6px] rounded-md hover:bg-[#CBE86A] transition duration-300"
          >
            Save
          </button>
        </main>
      </main>
    </div>
  );
};

export default Profile;
