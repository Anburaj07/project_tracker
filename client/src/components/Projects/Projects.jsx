import React from "react";
import styled from "styled-components";
import ProjectStates from "./ProjectStates";
import StatusHeader from "./StatusHeader";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <PROJECTS>
      <div className="flex justify-between pl-2 pr-2 p-1">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <button className=" bg-[#5030E5] rounded text-white p-1.5">
          + Add Project
        </button>
      </div>
      <ProjectStates />
      <StatusHeader />
      <ProjectList/>
    </PROJECTS>
  );
};

export default Projects;

const PROJECTS = styled.div`  
  margin-top: 10px;
  margin-bottom: 40px;
`;
