import React from "react";
import styled from "styled-components";
import inProgress from "../../images/inProgress.png";
import finished from "../../images/finished.png";
import unfinished from "../../images/unfinished.png";
import notStarted from "../../images/notStarted.png";

const ProjectStates = () => {
  return (
    <PROJECTSTATES className="flex justify-between">
      <div>
        <div>
          <p>Inprogress</p>
          <img src={inProgress} alt="" />
        </div>
        <h1 className="text-2xl font-semibold">110</h1>
      </div>
      <div>
        <div>
          <p>Finished</p>
          <img src={finished} alt="" />
        </div>
        <h1 className="text-2xl font-semibold">110</h1>
      </div>
      <div>
        <div>
          <p>Unfinished</p>
          <img src={unfinished} alt="" />
        </div>
        <h1 className="text-2xl font-semibold">110</h1>
      </div>
      <div>
        <div>
          <p>NotStarted</p>
          <img src={notStarted} alt="" />
        </div>
        <h1 className="text-2xl font-semibold">110</h1>
      </div>
    </PROJECTSTATES>
  );
};

export default ProjectStates;

const PROJECTSTATES = styled.div`
  width: 98%;
  margin: auto;
  margin-top: 20px;
  div {
    width: 22%;
    background-color: white;
    border-radius: 10px;
    padding-bottom: 15px;
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 10px 20px 10px 20px;
      img {
        width: 30px;
      }
    }
  }
`;
