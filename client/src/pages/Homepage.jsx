import React from "react";
import Sidebar from "../components/Sidebar";
import Projects from "../components/Projects/Projects";

const Homepage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#CECCCC] w-[90%]">
        <Projects />
      </div>
    </div>
  );
};

export default Homepage;
