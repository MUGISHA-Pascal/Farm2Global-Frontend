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
import { BrowserRouter } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex w-full flex-row">
      <menu className="flex py-[30px] flex-col space-y-[70px] border-gray-400 border-r-[1px] mt-[6px] w-[230px] pl-[17px]">
        <div className="flex w-full flex-col space-y-[30px] items-start">
          <div className="mainmenu w-full flex flex-col space-y-[13px] items-start">
            <h2 className="text-[#ff9933] font-100 text-[10px]">MAIN MENU</h2>
            <div className="flex w-full flex-col text-[13px]  text-[#CCD2E3] space-y-[15px]  items-start">
              <a
                href="#"
                className="flex flex-row space-x-[10px] w-full hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] items-center"
              >
                <BiSolidDashboard className="text-[17px] hover:text-white text-[#ff9933]" />{" "}
                <p>Dashboard</p>
              </a>
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
            <div className="flex w-full flex-col text-[13px]  text-[#CCD2E3] space-y-[15px]  items-start">
              <a
                href="#"
                className="flex  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full flex-row space-x-[10px]  items-center"
              >
                <IoSearchSharp className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                <p>View Crops</p>
              </a>
              <a
                href="#"
                className="flex flex-row  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full space-x-[10px]  items-center"
              >
                <IoMdAddCircleOutline className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                <p>Add Crops</p>
              </a>
              <a
                href="#"
                className="flex  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full flex-row space-x-[10px]  items-center"
              >
                <RiDeleteBin6Line className="text-[#ff9933] text-[17px] hover:text-white" />{" "}
                <p>Delete Crops</p>
              </a>
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
            <div className="flex flex-col w-full text-[13px]  text-[#CCD2E3] space-y-[15px]  items-start">
              <a
                href="#"
                className="flex flex-row  hover:bg-[#2FA24D] hover:text-white justify-start px-[4px] py-[6px] w-full space-x-[10px] items-center"
              >
                <BsPerson className="text-[#ff9933] hover:text-white text-[17px]" />{" "}
                <p text-shadow>Edit Profile</p>
              </a>
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
            <p className="text-[#CCD2E3]">
              Need help with <b className="text-white">Dash</b> ?
            </p>
            <button className="text-white p-[6px] w-[100px] bg-[#ff9933] rounded-[5px]">
              Go to help center
            </button>
          </div>
        </div>
      </menu>
      <main className="flex flex-col flex-1">
        <header className="flex flex-row h-[90px] items-center justify-between p-[30px] pl-[40px] w-full">
          <h2 className="font-bold text-white text-[20px]">Farmer Dashboard</h2>
          <div className="flex flex-row items-center space-x-[10px]">
            <img
              src={profileImage}
              alt="profile"
              className="w-[30px] h-[30px]"
            />
            <p className="font-bold text-white text-[12px]">John doe</p>
            <RiArrowDropDownLine className="text-gray-400 text-[20px] " />
          </div>
        </header>
        <div className="flex-1 bg-[#1E6E33] px-[20px] py-[17px]">
          <div className="bg-[#1B7633] w-full h-[320px] rounded-[10px]"></div>
          <div className="flex flex-row space-x-[20px] mt-[20px] w-full">
            <div className="bg-[#1B7633] w-[700px] h-[260px] rounded-[10px]"></div>
            <div className="bg-[#1B7633] w-[272px] h-[260px] rounded-[10px]"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
