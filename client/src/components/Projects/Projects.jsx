import React, { useState } from "react";
import styled from "styled-components";
import ProjectStates from "./ProjectStates";
import StatusHeader from "./StatusHeader";
import ProjectList from "./ProjectList";
import { useGetProjectsQuery } from "../../redux/slices/projectApi";

const Projects = () => {
  const { data: projectList, isLoading, isSuccess } = useGetProjectsQuery();
  
  let Inprogress = [];
  let Finished = [];
  let Unfinished = [];
  let Nonstarted = [];

  if (isSuccess) {
    Inprogress = projectList.filter((el) => el.status === "Inprogress");
    Finished = projectList.filter((el) => el.status === "Finished");
    Unfinished = projectList.filter((el) => el.status === "Unfinished");
    Nonstarted = projectList.filter((el) => el.status === "Nonstarted");
  }

  const [status, setStatus] = useState("All");

  const handleChange = (value) => {
    setStatus(value);
  };
  console.log(status);
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
        <button className=" bg-[#5030E5] rounded text-white p-1.5">
          + Add Project
        </button>
      </div>
      {isLoading && <h1>loading....</h1>}
      {isSuccess && <>
        <ProjectStates
        Inprogress={Inprogress.length}
        Finished={Finished.length}
        Unfinished={Unfinished.length}
        Nonstarted={Nonstarted.length}
      />
      <StatusHeader status={status} handleChange={handleChange} />
      <ProjectList data={data} />
      </>}
    </PROJECTS>
  );
};

export default Projects;

const PROJECTS = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
`;
