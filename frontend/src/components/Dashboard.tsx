import { BiSolidDashboard } from "react-icons/bi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import profileImage from "../assets/demoProfile.png";
import { BrowserRouter, Link, Outlet } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
const Dashboard = () => {
  const [categoryShow, setCategoryShow] = useState(false);
  const [profileImage, setProfile] = useState("");
  interface user {
    id: string;
    firstname: string;
    lastname: string;
    country: string;
    district: string;
    phoneNo: string;
    profilePhoto: string;
  }
  let user: user = {
    id: "",
    firstname: "",
    lastname: "",
    country: "",
    district: "",
    phoneNo: "",
    profilePhoto: "",
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.target.closest(".dropdown-category")) {
        setCategoryShow(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  interface userint {
    message: string;
    user: {
      id: string;
      firstname: string;
      lastname: string;
      country: string;
      district: string;
      phoneNo: string;
      profilePhoto: string;
    };
  }

  const userLocalStorage = localStorage.getItem("user");
  if (userLocalStorage) {
    let { result }: { result: userint } = JSON.parse(userLocalStorage);
    user = result.user;
  }
  useEffect(() => {
    let ImageName = user.profilePhoto;
    if (ImageName == null) {
      ImageName = "default.png";
    }
    setProfile(`http://localhost:4000/user/image/${ImageName}`);
  }, [profileImage]);
  return (
    <div className="flex w-full mt-[94px]  flex-row border-t-[1px] border-gray-400">
      <menu className="flex max-md:hidden py-[30px] flex-col space-y-[70px] border-gray-400 border-r-[1px] mt-[6px] w-[250px] pl-[17px]">
        <div className="flex w-full flex-col space-y-[30px] items-start">
          <div className="mainmenu w-full flex flex-col space-y-[13px] items-start">
            <h2 className="text-[#ff9933] font-100 text-[10px]">MAIN MENU</h2>
            <div className="flex w-full flex-col text-[13px]  text-white space-y-[15px]  items-start">
              <Link
                to="/dashboard/"
                className="flex flex-row space-x-[10px] w-full hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] items-center"
              >
                <BiSolidDashboard className="text-[17px] hover:text-white text-[#ff9933]" />{" "}
                <p>Dashboard</p>
              </Link>
              <a
                href="#"
                className="flex hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full flex-row space-x-[10px] items-center"
              >
                <BiMessageRoundedDots className="text-[17px] hover:text-white text-[#ff9933]" />{" "}
                <p>Inbox</p>
              </a>
            </div>
          </div>
          <div className="workspace flex w-full flex-col space-y-[13px] items-start">
            <h2 className="text-[#ff9933]  text-[10px]">Workspace</h2>
            <div className="flex w-full flex-col text-[13px]  text-white space-y-[15px]  items-start">
              <Link
                to="view-crop"
                className="flex  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full flex-row space-x-[10px]  items-center"
              >
                <IoSearchSharp className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                <p>Manage Crops</p>
              </Link>
              <Link
                to="add-crop"
                className="flex flex-row  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full space-x-[10px]  items-center"
              >
                <IoMdAddCircleOutline className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                <p>Add Crops</p>
              </Link>
              {/* <a
                href="#"
                className="flex  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full flex-row space-x-[10px]  items-center"
              >
                <RiDeleteBin6Line className="text-[#ff9933] text-[17px] hover:text-white" />{" "}
                <p>Delete Crops</p>
              </a> */}
              <a
                href="#"
                className="flex flex-row  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full space-x-[10px]  items-center"
              >
                <MdOutlineAnalytics className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                <p>Analytics</p>
              </a>
            </div>
          </div>
          <div className="accountsettings w-full flex flex-col space-y-[13px] items-start">
            <h2 className="text-[#ff9933] text-[10px]">Account settings</h2>
            <div className="flex flex-col w-full text-[13px]  text-white space-y-[15px]  items-start">
              <Link
                to="profile"
                className="flex flex-row  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full space-x-[10px] items-center"
              >
                <BsPerson className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                <p text-shadow>Edit Profile</p>
              </Link>
              <a
                href="#"
                className="flex flex-row  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full space-x-[10px] items-center"
              >
                <MdOutlinePayments className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                <p>Edit Payment</p>
              </a>
            </div>
          </div>
        </div>
        <div className="help relative h-[120px]">
          <div className="absolute z-10 left-[60px] border-[#ff9933] border-[3px] bg-[#25883F] p-[2px] rounded-full">
            <AiFillQuestionCircle className="text-[#ff9933] text-[22px]" />
          </div>
          <div className="w-[160px] h-[110px] pt-[25px] text-[10px] absolute top-[15px] bg-[#2FA24D] items-center justify-center rounded-[8px] flex flex-col space-y-[6px]">
            <p className="text-white">
              Need help with <b className="text-white">Dash</b> ?
            </p>
            <button className="text-white p-[6px] w-[100px] bg-[#ff9933] rounded-[5px]">
              Go to help center
            </button>
          </div>
        </div>
      </menu>
      <main className="flex flex-col flex-1">
        <header className="flex flex-row h-[90px] max-md:space-x-[57px] items-center md:justify-between p-[30px] max-md:p-[13px] md:pl-[40px] w-full">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setCategoryShow(!categoryShow);
            }}
            className="dropdown-category md:hidden text-white"
          >
            <div className="flex flex-row hover:cursor-pointer space-x-[10px]   items-center justify-center hover:text-green-300">
              <LuMenu className="text-[20px]" />
            </div>
            {categoryShow && (
              <div className="absolute font-normal left-0  z-40 p-[30px] items-start top-[184px]  text-[#CCD2E3] rounded-tr-[10px]  rounded-br-[10px] border-[1px]  border-gray-400  bg-[#25883F] flex flex-col space-y-[10px]">
                <Link
                  to="/dashboard/"
                  className="flex flex-row space-x-[10px] w-full hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] items-center"
                >
                  <BiSolidDashboard className="text-[17px] hover:text-white text-[#ff9933]" />{" "}
                  <p>Dashboard</p>
                </Link>
                <Link
                  to="view-crop"
                  className="flex  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full flex-row space-x-[10px]  items-center"
                >
                  <IoSearchSharp className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                  <p>Manage Crops</p>
                </Link>
                <Link
                  to="add-crop"
                  className="flex flex-row  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full space-x-[10px]  items-center"
                >
                  <IoMdAddCircleOutline className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                  <p>Add Crops</p>
                </Link>

                <a
                  href="#"
                  className="flex flex-row  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full space-x-[10px]  items-center"
                >
                  <MdOutlineAnalytics className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                  <p>Analytics</p>
                </a>
                <Link
                  to="profile"
                  className="flex flex-row  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full space-x-[10px] items-center"
                >
                  <BsPerson className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                  <p text-shadow>Edit Profile</p>
                </Link>
                <a
                  href="#"
                  className="flex flex-row  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full space-x-[10px] items-center"
                >
                  <MdOutlinePayments className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                  <p>Edit Payment</p>
                </a>
              </div>
            )}
          </div>{" "}
          <h2 className="font-bold text-white text-[20px] max-md:text-[13px]">
            Farmer Dashboard
          </h2>
          <Link
            to="profile"
            className="flex hover:text-green-300 cursor-pointer flex-row items-center space-x-[10px] max-md:space-x-[5px]"
          >
            <img
              src={profileImage}
              alt="profile"
              className="w-[40px] h-[40px] max-md:w-[22px] max-md:h-[22px] object-cover rounded-full"
            />
            <p className="font-bold text-white text-[12px] max-md:text-[9px]">
              {user.firstname} {user.lastname}
            </p>
          </Link>
        </header>
        <div className="relative bg-white flex-1 px-[20px] py-[17px] max-md:px-[3px] max-md:py-[10px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
