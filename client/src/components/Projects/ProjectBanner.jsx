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
  return (
    <div className="bg-white rounded-md p-4 mt-4">
      <div className="flex items-center text-left">
        <img src={logo} alt="" />
        <div className="pl-4">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex justify-between mt-3 w-[80%]">
        <div>
          <p>Progress</p>
          <p
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
          </p>
        </div>
        <div>
          <p>Status</p>
          <p
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
            {status}
          </p>
        </div>
        <div>
          <p>Task</p>
          <p
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
            {task}
          </p>
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
