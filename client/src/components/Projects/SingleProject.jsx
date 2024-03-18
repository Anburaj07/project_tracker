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
  const navigate = useNavigate();

  const getStatusStyle = () => {
    if (percentage === 0) return "text-[#787486] bg-[#D0CFD5]";
    if (percentage === 100) return "text-[#069845] bg-[#CDEADA]";
    if (percentage < 50 && percentage > 0) return "text-[#FF0000] bg-[#FFA6A6]";
    return "text-[#FF9900] bg-[#FFEBCC]";
  };

  const getPercentageTextStyle = () => {
    if (percentage === 0) return "text-[#6d6d6d]";
    if (percentage === 100) return "text-[#069845]";
    if (percentage < 50 && percentage > 0) return "text-[#FF0000]";
    return "text-[#FF9900]";
  };

  const getPercentageBarStyle = () => {
    if (percentage === 100) return "bg-[#069845]";
    if (percentage < 50 && percentage > 0) return "bg-[#FF0000]";
    return "bg-[#FF9900]";
  };

  return (
    <div
      className="bg-white rounded-md p-4 grid cursor-pointer gap-y-3"
      onClick={() => navigate(`/projects/project/${_id}`)}
    >
      <div className="flex justify-end items-center">
        <p className={`mr-4 pl-4 pr-4 p-1 rounded-md ${getStatusStyle()}`}>
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
          <h1 className={`font-semibold ${getPercentageTextStyle()}`}>
            {percentage}%
          </h1>
        </div>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded-md">
        <div
          className={`h-full rounded-md ${getPercentageBarStyle()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-end">
        <img src={calender} alt="" className="pr-2" />
        <p className="text-[#787486]">{due_date}</p>
      </div>
    </div>
  );
};

export default SingleProject;
