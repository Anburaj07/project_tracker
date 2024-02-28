import React from "react";
import search from "../../images/search.png";
import filter from "../../images/filter.png";
import styled from "styled-components";

const StatusHeader = ({ status, handleChange }) => {
  return (
    <STATUSHEADER className="flex justify-between mt-8 w-[97%] m-auto">
      <div
        className="flex justify-between w-[70%] bg-white p-2 pl-4 pr-4 rounded"
        id="projectStatus"
      >
        <button
          className={`font-semibold ${status === "All" && "text-[#5030E5] underline"}`}
          onClick={() => handleChange("All")}
        >
          All Projects
        </button>
        <button
          className={`font-semibold ${status === "Nonstarted" && "text-[#5030E5] underline"}`}
          onClick={() => handleChange("Nonstarted")}
        >
          Not Stated
        </button>
        <button
          className={`font-semibold ${status === "Inprogress" && "text-[#5030E5] underline"}`}
          onClick={() => handleChange("Inprogress")}
        >
          In Progress
        </button>
        <button
          className={`font-semibold ${status === "Finished" && "text-[#5030E5] underline"}`}
          onClick={() => handleChange("Finished")}
        >
          Finished
        </button>
        <button
          className={`${status === "Unfinished" && "text-[#5030E5]"}`}
          onClick={() => handleChange("Unfinished")}
        >
          Unfinished
        </button>
      </div>
      <div className="flex items-center bg-[#ffff] rounded-md p-2">
        <div>
          <img src={search} alt="" className="w-[100%]" />
        </div>
        <input type="text" placeholder="Search Projects" className="pl-2 " />
      </div>
      <div className="bg-[#ffff] rounded-md p-2 flex items-center">
        <img src={filter} alt="" />
        <h2>Filter</h2>
      </div>
    </STATUSHEADER>
  );
};

export default StatusHeader;

const STATUSHEADER = styled.div``;
