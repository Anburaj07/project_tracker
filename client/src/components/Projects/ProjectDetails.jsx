import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between pl-2 pr-2 p-1">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <button
          className=" bg-[#5030E5] rounded text-white p-1.5"
          onClick={() => navigate("/projects/add")}
        >
          + Add Project
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
