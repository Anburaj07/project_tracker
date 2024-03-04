import React from "react";
import more from "../../images/more.png";
import calender from "../../images/calender.png";
import { useNavigate } from "react-router-dom";

const SingleProject = ({
  _id,
  status,
  title,
  description,
  percentage,
  due_date,
}) => {

  const navigate=useNavigate()
  return (
    <div className="bg-white  rounded-md p-4 grid gap-y-3" onClick={navigate(`/projects/project/${_id}`)}>
      <div className="flex justify-end items-center">
        <p
          className={`mr-4 pl-4 pr-4 p-1 rounded-md ${
            percentage === 0
              ? "text-[#787486] bg-[#D0CFD5]"
              : percentage === 100
              ? "text-[#069845] bg-[#CDEADA]"
              : percentage < 50 && percentage > 0
              ? "text-[#FF0000] bg-[#FFA6A6]"
              : "text-[#FF9900] bg-[#FFEBCC]"
          }`}
        >
          {status}
        </p>
        <img src={more} alt="" className="" />
      </div>
      <div className="pt-2 text-left">
        <h1 className="text-2xl font-semibold ">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="text-left">
        <div className="flex justify-between ">
          <h1 className="text-base font-semibold">Progress</h1>
          <h1
            className={`font-semibold ${
              percentage === 0
                ? "text-[#6d6d6d]"
                : percentage === 100
                ? "text-[#069845]"
                : percentage < 50 && percentage > 0
                ? "text-[#FF0000]"
                : "text-[#FF9900]"
            }`}
          >
            {percentage}%
          </h1>
        </div>
        <p>-------------------------bar-------------------------</p>
      </div>
      <div className="flex justify-end">
        <img src={calender} alt="" className="pr-2" />
        <p className="text-[#787486]">{due_date}</p>
      </div>
    </div>
  );
};

export default SingleProject;
