import React from "react";
import waitingImage from "../assets/notFound.png";
const Waiting = () => {
  return (
    <div className="w-full grid place-items-center">
      <div className="flex flex-col space-y-[30px] w-[400px] max-md:mt-[70px] mt-[140px]">
        <h2 className="text-gray-700 text-[30px] font-semibold">
          No Conversation Selected
        </h2>
        <img src={waitingImage} className="w-[300px] " alt="not found image" />
      </div>
    </div>
  );
};

export default Waiting;
