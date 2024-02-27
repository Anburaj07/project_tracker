import React from "react";
import inProgress from "../images/inProgress.png";
import finished from "../images/finished.png";
import unfinished from "../images/unfinished.png";
import notStarted from "../images/notStarted.png";
import styled from "styled-components";

const Projects = () => {
  return (
    <PROJECTS>
      <div className="flex justify-between pl-2 pr-2 p-1">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <button className=" bg-[#5030E5] rounded text-white p-1.5">
          + Add Project
        </button>
      </div>
      <div className="flex justify-between" id="projectState">
        <div>
          <div>
            <p>Inprogress</p>
            <img src={inProgress} alt="" />
          </div>
          <h1 className="text-2xl font-semibold">110</h1>
        </div>
        <div>
          <div >
            <p>Finished</p>
            <img src={finished} alt="" />
          </div>
          <h1 className="text-2xl font-semibold">110</h1>
        </div>
        <div>
          <div >
            <p>Unfinished</p>
            <img src={unfinished} alt="" />
          </div>
          <h1 className="text-2xl font-semibold">110</h1>
        </div>
        <div>
          <div >
            <p>NotStarted</p>
            <img src={notStarted} alt="" />
          </div>
          <h1 className="text-2xl font-semibold">110</h1>
        </div>
      </div>
    </PROJECTS>
  );
};

export default Projects;

const PROJECTS=styled.div`
    #projectState{
        width: 98%;
        margin: auto;
        margin-top: 20px;
        div{
            width: 22%;
            background-color: white;
            border-radius: 10px;
            padding-bottom: 15px;
            div{
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 10px 20px 10px 20px;
                img{
                    width: 30px;
                }
            }
        }
    }
`