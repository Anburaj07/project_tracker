import React, { useState } from "react";
import styled from "styled-components";
import ProjectStates from "./ProjectStates";
import StatusHeader from "./StatusHeader";
import ProjectList from "./ProjectList";
import { useGetProjectsQuery } from "../../redux/slices/projectApi";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const { data: projectList, isLoading, isSuccess } = useGetProjectsQuery();
  const [status, setStatus] = useState("All");
  const navigate = useNavigate();

  let Inprogress = [];
  let Finished = [];
  let Unfinished = [];
  let Nonstarted = [];

  //Loader
  if (isLoading) {
    return (
      <div className="flex justify-center items-center m-auto h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (isSuccess) {
    Inprogress = projectList.filter((el) => el.status === "Inprogress");
    Finished = projectList.filter((el) => el.status === "Finished");
    Unfinished = projectList.filter((el) => el.status === "Unfinished");
    Nonstarted = projectList.filter((el) => el.status === "Nonstarted");
  }

  const handleChange = (value) => {
    setStatus(value);
  };
  
  let data =
    status === "All"
      ? projectList
      : status === "Nonstarted"
      ? Nonstarted
      : status === "Inprogress"
      ? Inprogress
      : status === "Unfinished"
      ? Unfinished
      : Finished;

  return (
    <PROJECTS>
      <div className="flex justify-between pl-2 pr-2 p-1">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <button
          className=" bg-[#5030E5] rounded text-white p-1.5"
          onClick={() => navigate("/projects/add")}
        >
          + Add Project
        </button>
      </div>
      {isSuccess && (
        <>
          <ProjectStates
            Inprogress={Inprogress.length}
            Finished={Finished.length}
            Unfinished={Unfinished.length}
            Nonstarted={Nonstarted.length}
          />
          <StatusHeader status={status} handleChange={handleChange} />
          <ProjectList data={data} />
        </>
      )}
    </PROJECTS>
  );
};

export default Projects;

const PROJECTS = styled.div`
  background-color: #f5f5f5;
  padding-top: 10px;
  padding-bottom: 40px;
  width: 90%;
`;
