import React from "react";
import { Route, Routes } from "react-router-dom";
import TicketModal from "./Tickets/TicketModal";
import Projects from "./Projects/Projects";
import Tasks from "./Tasks/Tasks";
import Tickets from "./Tickets/Tickets";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/projects/edit/:id" element={<TicketModal />} />
      <Route path="/projects/add" element={<TicketModal />} />
    </Routes>
  );
};

export default AllRoutes;
