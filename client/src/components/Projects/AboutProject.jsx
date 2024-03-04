import React from "react";

const AboutProject = ({ about }) => {
  return (
    <div className="bg-white rounded-md p-6 mt-6 text-left ">
      <h1 className="text-2xl font-semibold pb-2"> About project</h1>
      <p>{about}</p>
    </div>
  );
};

export default AboutProject;
