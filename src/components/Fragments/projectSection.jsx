import React from "react";
import Project1 from "./projectSection/project1";
import Project2 from "./projectSection/project2";

const ProjectSection = () => {
  return (
    <div className="flex justify-around flex-col gap-10 py-4 sm:gap-10 lg:gap-0 ">
      <Project1 />
      <Project2 />
    </div>
  );
};

export default ProjectSection;
