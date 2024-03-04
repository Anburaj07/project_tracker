import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import leftArrow from "../../images/leftArrow.png";
import editPencil from "../../images/editPencil.png";
import { useGetProjectByIdQuery } from "../../redux/slices/projectApi";
import ProjectBanner from "./ProjectBanner";
import AboutProject from "./AboutProject";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useGetProjectByIdQuery(id);
  return (
    <PROJECTDETAILS className="pl-4 w-[90%] pt-6 pr-6 min-h-lvh">
      <div className="flex justify-between pl-2 pr-2 p-1">
        <div className="flex items-center">
          <img
            src={leftArrow}
            alt=""
            onClick={() => navigate("/")}
            className="w-[18%] pr-2"
          />
          <h1 className="text-2xl font-semibold">Project Details</h1>
        </div>
        <div className="flex items-center bg-[#5030E5] rounded-md text-white p-1.5">
          <img src={editPencil} alt="" />
          <button onClick={() => navigate(`/projects/project/edit/${data?._id}`)}>
            Edit Project
          </button>
        </div>
      </div>
      {isLoading && <h1>Loading...</h1>}
      {isSuccess && (
        <>
          <ProjectBanner {...data} />
          <AboutProject about={data?.about} />
        </>
      )}
    </PROJECTDETAILS>
  );
};

export default ProjectDetails;

const PROJECTDETAILS = styled.div`
  background-color: #f5f5f5;
`;
