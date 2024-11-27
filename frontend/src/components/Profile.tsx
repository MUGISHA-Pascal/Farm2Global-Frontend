import React, { useState } from "react";
import profileImage from "../assets/demoProfile.png";
import axios from "axios";
import ImageUploader from "./ImageUploader";

const Profile = () => {
  let userRetrieve: user = {
    id: "",
    firstname: "",
    lastname: "",
    country: "",
    district: "",
    phoneNo: "",
    role: "",
  };
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };
  const handleUpload = async () => {
    if (!file) {
      setMessage("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        "http://localhost:4000/user/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMessage("File upload successfully");
    } catch (error) {
      console.log(error);
      setMessage("File upload failed");
    }
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
    };
  }
  const userLocalStorage = localStorage.getItem("user");
  if (userLocalStorage) {
    let { result }: { result: userint } = JSON.parse(userLocalStorage);
    userRetrieve = result.user;
  }
  const [user, setuser] = useState({
    firstname: userRetrieve.firstname,
    lastname: userRetrieve.lastname,
    country: userRetrieve.country,
    phoneNo: userRetrieve.phoneNo,
  });
  const [district, setDistrict] = useState(userRetrieve.district);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
  interface user {
    id: string;
    firstname: string;
    lastname: string;
    country: string;
    district: string;
    phoneNo: string;
    role: string;
  }

  let districtHide = true;
  if (userRetrieve.role === "buyer") {
    districtHide = false;
  }
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
                placeholder={user.firstname}
                onChange={handleChange}
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
                placeholder={user.lastname}
                onChange={handleChange}
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
                placeholder={user.phoneNo}
                onChange={handleChange}
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
                placeholder={user.country}
                id="country"
                onChange={handleChange}
                type="text"
                className="w-[250px] text-[13px] text-gray-500 focus:outline-none border-[1px] border-gray-300 p-[5px] rounded-[10px]"
              />
            </div>

            {districtHide && (
              <div className="flex flex-col items-start space-y-[10px]">
                <label
                  htmlFor="district"
                  className="text-sm font-medium text-gray-700"
                >
                  District
                </label>
                <input
                  id="district"
                  placeholder={district}
                  type="text"
                  className="w-[250px] text-[13px] text-gray-500 focus:outline-none border-[1px] border-gray-300 p-[5px] rounded-[10px]"
                />
              </div>
            )}
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
