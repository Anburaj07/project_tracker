import React from "react";
import more from "../../images/more.png";
import calender from "../../images/calender.png";

const SingleProject = () => {
  return (
    <div className="bg-white w-[30%] rounded-md p-4 grid gap-y-3">
      <div className="flex justify-end items-center">
        <p className="mr-4 bg-[#FFA6A6] text-[#FF0000] pl-4 pr-4 p-1 rounded-md">
          Inprogress
        </p>
        <img src={more} alt="" className="" />
      </div>
      <div className="pt-2 text-left">
        <h1 className="text-2xl font-semibold ">Title</h1>
        <p>
          Lorem ipsum dolor sit amet consecte sit ut aliquam vulputate at in in.{" "}
        </p>
      </div>
      <div className="text-left">
        <div className="flex justify-between ">
          <h1 className="text-base font-semibold">Progress</h1>
          <h1 className="text-[#FF0000] font-semibold">15%</h1>
        </div>
        <p>-------------------------bar-------------------------</p>
      </div>
      <div className="flex justify-end">
        <img src={calender} alt="" className="pr-2" />
        <p className="text-[#787486]">Feb 08 2024</p>
      </div>
    </div>
  );
};

export default SingleProject;
