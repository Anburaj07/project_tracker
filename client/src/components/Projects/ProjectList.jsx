import React from "react";
import SingleProject from "./SingleProject";

const ProjectList = ({ data }) => {
  return (
    <div className="mt-4 w-[97%] m-auto grid gap-4 grid-cols-3">
      {data?.map((el) => (
        <SingleProject {...el}/>
      ))}
    </div>
  );
};

export default ProjectList;
