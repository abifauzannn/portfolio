import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project1 from "./projectSection/project1";
import Project2 from "./projectSection/project2";

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // durasi animasi dalam milidetik
    });
  }, []);

  return (
    <div className="flex justify-around flex-col gap-10 sm:gap-10 lg:gap-0">
      <div data-aos="fade-up">
        <Project1 />
      </div>
      <div data-aos="fade-up">
        <Project2 />
      </div>
    </div>
  );
};

export default ProjectSection;
