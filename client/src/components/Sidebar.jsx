import React from "react";
import projectsImg from "../images/projects.png";
import tasksImg from "../images/tasks.png";
import ticketsImg from "../images/tickets.png";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <StyledSidebar className="w-[10%] border-r border-gray-400 overflow-y-auto sticky top-0">
      <SidebarItem
        onClick={() => navigate("/")}
        isActive={pathname === "/"}
        icon={projectsImg}
        label="Projects"
      />
      <SidebarItem
        onClick={() => navigate("/tasks")}
        isActive={pathname === "/tasks"}
        icon={tasksImg}
        label="Tasks"
      />
      <SidebarItem
        onClick={() => navigate("/tickets")}
        isActive={pathname === "/tickets"}
        icon={ticketsImg}
        label="Tickets"
      />
    </StyledSidebar>
  );
};

const SidebarItem = ({ onClick, isActive, icon, label }) => {
  return (
    <div className={`flex p-5 ${isActive ? "bg-[#E7F3FF]" : ""}`} onClick={onClick}>
      <img src={icon} alt={label} />
      <h2 className={`text-lg ${isActive ? "text-[#5030E5]" : ""}`}>{label}</h2>
    </div>
  );
};

const StyledSidebar = styled.div`
  div:hover {
    cursor: pointer;
  }
  img {
    padding-right: 12px;
  }
`;

export default Sidebar;

