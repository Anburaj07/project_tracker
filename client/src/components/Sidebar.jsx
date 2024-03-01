import React from "react";
import projects from "../images/projects.png";
import tasks from "../images/tasks.png";
import tickets from "../images/tickets.png";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
const Sidebar = ({state}) => {
  const navigate = useNavigate();
  return (
    <SIDEBAR className="w-[10%] border-r border-gray-400  overflow-y-auto sticky top-0">
      <div
        className={`flex p-5 ${state === "Projects" ? "bg-[#E7F3FF]" : ""} `}
        onClick={() => navigate("/")}
      >
        <img src={projects} alt="" />
        <h2
          className={`text-lg ${state === "Projects" ? "text-[#5030E5]" : ""}`}
        >
          Projects
        </h2>
      </div>
      <div
        className={`flex p-5 ${state === "Tasks" ? "bg-[#E7F3FF]" : ""} `}
        onClick={() => navigate("/tasks")}
      >
        <img src={tasks} alt="" />
        <h2 className={`text-lg ${state === "Tasks" ? "text-[#5030E5]" : ""}`}>
          Tasks
        </h2>
      </div>
      <div
        className={`flex p-5 ${state === "Tickets" ? "bg-[#E7F3FF]" : ""} `}
        onClick={() => navigate("/tickets")}
      >
        <img src={tickets} alt="" />
        <h2
          className={`text-lg ${state === "Tickets" ? "text-[#5030E5]" : ""}`}
        >
          Tickets
        </h2>
      </div>
    </SIDEBAR>
  );
};

export default Sidebar;

const SIDEBAR = styled.div`
  div:hover {
    cursor: pointer;
  }
  img {
    padding-right: 12px;
  }
`;
