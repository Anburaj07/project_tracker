import React from "react";
import styled from "styled-components";
import inProgress from "../../images/inProgress.png";
import finished from "../../images/finished.png";
import unfinished from "../../images/unfinished.png";
import notStarted from "../../images/notStarted.png";

const ProjectStates = ({ Inprogress, Finished, Unfinished, Nonstarted }) => {
  return (
    <StyledProjectStates>
      <StateItem>
        <div>
          <p>In Progress</p>
          <img src={inProgress} alt="In Progress" />
        </div>
        <h1 className="text-2xl font-semibold">{Inprogress}</h1>
      </StateItem>
      <StateItem>
        <div>
          <p>Finished</p>
          <img src={finished} alt="Finished" />
        </div>
        <h1 className="text-2xl font-semibold">{Finished}</h1>
      </StateItem>
      <StateItem>
        <div>
          <p>Unfinished</p>
          <img src={unfinished} alt="Unfinished" />
        </div>
        <h1 className="text-2xl font-semibold">{Unfinished}</h1>
      </StateItem>
      <StateItem>
        <div>
          <p>Not Started</p>
          <img src={notStarted} alt="Not Started" />
        </div>
        <h1 className="text-2xl font-semibold">{Nonstarted}</h1>
      </StateItem>
    </StyledProjectStates>
  );
};

const StyledProjectStates = styled.div`
  width: 98%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const StateItem = styled.div`
  width: 22%;
  background-color: white;
  border-radius: 10px;
  padding-bottom: 15px;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    img {
      width: 30px;
    }
  }
`;

export default ProjectStates;
