import React from "react";
import notificationIcon from "../images/notification.png";
import dpIcon from "../images/dp.png";
import searchIcon from "../images/search.png";

const Navbar = () => {
  return (
    <div className="flex pt-2 items-center border-b border-gray-400 ">
      <div className="w-[10%] border-r border-gray-400 h-24 pb-2 flex items-center justify-center">
        <h1 className="text-xl font-medium">Project M</h1>
      </div>
      <div className="w-[90%] flex  justify-between pl-3 pr-3 mb-3">
        <div className="flex items-center bg-[#DBDBDB] w-[25%] rounded-md p-2">
          <div>
            <img src={searchIcon} alt="" className="w-[100%]" />
          </div>
          <input
            type="text"
            placeholder="Search for anything..."
            className="pl-2 bg-[#DBDBDB] w-[90%]"
          />
        </div>
        <div className="flex justify-between items-center w-[20%] pl-3 pr-3">
          <div>
            <img src={notificationIcon} alt="" className="w-[100%]" />
          </div>
          <div>
            <h3 className="text-md text-[#0D062D]">Anima Agrawal</h3>
            <p className="text-sm text-[#787486]">abhb@gmail.com</p>
          </div>
          <div>
            <img src={dpIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
