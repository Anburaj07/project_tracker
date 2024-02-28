import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Projects from "../components/Projects/Projects";

const Homepage = () => {
  const [state,setState]=useState('Projects');

  const handleClick=(value)=>{
      setState(value)
  }

  console.log(state)
  return (
    <div className="flex">
      <Sidebar state={state} handleClick={handleClick} />
      <div className="bg-[#CECCCC] w-[90%]">
        <Projects />
      </div>
    </div>
  );
};

export default Homepage;
