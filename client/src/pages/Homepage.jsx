import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Projects from "../components/Projects/Projects";
import Tasks from "../components/Tasks/Tasks";
import Tickets from "../components/Tickets/Tickets";

const Homepage = () => {
  const [state,setState]=useState('Projects');

  const handleClick=(value)=>{
      setState(value)
  }

  console.log(state)
  return (
    <div className="flex">
      <Sidebar state={state} handleClick={handleClick} />
      <div className="bg-[#F5F5F5] w-[90%]">
       {state==="Projects"? <Projects />:state==="Tasks"?<Tasks/>:<Tickets/>}
      </div>
    </div>
  );
};

export default Homepage;
