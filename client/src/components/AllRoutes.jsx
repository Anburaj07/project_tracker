import React from "react";
import { Route, Routes } from "react-router-dom";
import TicketModal from "./Tickets/TicketModal";
import Projects from "./Projects/Projects";
import Tasks from "./Tasks/Tasks";
import Tickets from "./Tickets/Tickets";
import ProjectModal from "./Projects/ProjectModal";
import ProjectDetails from "./Projects/ProjectDetails";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/tickets/edit/:id" element={<TicketModal />} />
      <Route path="/tickets/add" element={<TicketModal />} />
      <Route path="/projects/add" element={<ProjectModal />} />
      <Route path="/projects/project/:id" element={<ProjectDetails />} />
      <Route path="/projects/edit/:id" element={<ProjectModal />} />
    </Routes>
  );
};

export default AllRoutes;
