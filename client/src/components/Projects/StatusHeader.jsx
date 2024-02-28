import React, { useState } from "react";
import search from "../../images/search.png";
import filter from "../../images/filter.png";
import styled from "styled-components";

const StatusHeader = () => {
  const [status, setStatus] = useState("All");

  const handleChange = (value) => {
    setStatus(value)
  };
  console.log(status)
  return (
    <STATUSHEADER className="flex justify-between mt-8 w-[97%] m-auto">
      <div
        className="flex justify-between w-[70%] bg-white p-2 pl-4 pr-4 rounded"
        id="projectStatus"
      >
        <button onClick={() => handleChange("All")}>All Projects</button>
        <button onClick={() => handleChange("Not Stated")}>Not Stated</button>
        <button onClick={() => handleChange("In Progress")}>In Progress</button>
        <button onClick={() => handleChange("Finished")}>Finished</button>
        <button onClick={() => handleChange("Unfinished")}>Unfinished</button>
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
