import React from "react";
import search from "../../images/search.png";
import filter from "../../images/filter.png";
import styled from "styled-components";

const StatusHeader = ({ status, handleChange }) => {
  return (
    <div className="flex justify-between mt-8 w-[97%] m-auto">
      <div
        className="flex justify-between w-[70%] bg-white p-2 pl-4 pr-4 rounded"
        id="projectStatus"
      >
        <StatusButton
          active={status === "All"}
          onClick={() => handleChange("All")}
        >
          All Projects
        </StatusButton>
        <StatusButton
          active={status === "Nonstarted"}
          onClick={() => handleChange("Nonstarted")}
        >
          Not Started
        </StatusButton>
        <StatusButton
          active={status === "Inprogress"}
          onClick={() => handleChange("Inprogress")}
        >
          In Progress
        </StatusButton>
        <StatusButton
          active={status === "Finished"}
          onClick={() => handleChange("Finished")}
        >
          Finished
        </StatusButton>
        <StatusButton
          active={status === "Unfinished"}
          onClick={() => handleChange("Unfinished")}
        >
          Unfinished
        </StatusButton>
      </div>
      <div className="flex items-center bg-[#ffff] rounded-md p-2">
        <div>
          <img src={search} alt="" className="w-[100%]" />
        </div>
        <input type="text" placeholder="Search Projects" className="pl-2" />
      </div>
      <div className="bg-[#ffff] rounded-md p-2 flex items-center">
        <img src={filter} alt="" />
        <h2>Filter</h2>
      </div>
    </div>
  );
};

const StatusButton = styled.button`
  font-weight: 600;
  ${(props) => props.active && "color: #5030E5; text-decoration: underline;"}
`;

export default StatusHeader;
