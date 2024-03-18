import React from "react";
import logo from "../../images/logo.png";

const ProjectBanner = ({
  title,
  description,
  percentage,
  starting_date,
  due_date,
  task,
  status,
}) => {
  const getTextColorClass = () => {
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
    <div className="bg-white rounded-md p-4 mt-4">
      <div className="flex items-center text-left">
        <img src={logo} alt="" />
        <div className="pl-4">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex justify-between mt-3 w-full  p-4">
        <div className="w-[40%]">
          <div className="flex justify-between font-semibold">
            <p>Progress</p>
            <p className={getTextColorClass()}>{percentage}%</p>
          </div>
          <div className="w-full h-4 bg-gray-200 rounded-md mt-4">
            <div
              className={`h-full rounded-md ${getPercentageBarStyle()}`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
        <div>
          <p>Status</p>
          <p className={getTextColorClass()}>{status}</p>
        </div>
        <div>
          <p>Task</p>
          <p className={getTextColorClass()}>{task}</p>
        </div>
        <div>
          <p>Due date</p>
          <p>{due_date}</p>
        </div>
        <div>
          <p>Starting date</p>
          <p>{starting_date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
