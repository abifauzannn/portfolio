import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../Elements/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const project = [
  {
    id: 1,
    companyName: "Oasys Edutech Indonesia",
    position: "Freelance",
    years: "Jun 24 - Present",
    description:
      "Brainys is an application that can help teachers / teaching staff to obtain creative ideas within the scope of administration and academic activities",
  },
  {
    id: 2,
    companyName: "Oasys Edutech Indonesia",
    position: "Internship",
    years: "Jan 2024 - Jun 2024",
    description:
      "Brainys is an application that can help teachers / teaching staff to obtain creative ideas within the scope of administration and academic activities",
  },
];

const ProjectCard = ({
  id,
  companyName,
  position,
  years,
  description,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`flex flex-row bg-white justify-between shadow-lg text-start rounded-lg mb-5 p-5 gap-10 -ml-60 transition-opacity duration-300 ${
        isHovered === id
          ? "opacity-100"
          : isHovered === null
          ? "opacity-100"
          : "opacity-50"
      }`}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <p className="text-start w-40 font-bebas text-xl">{years}</p>
      </div>
      <div className="">
        <h2 className="text-amber-600 text-3xl sm:text-1xl font-extrabold md:text-5xl lg:text-xl font-bebas">
          {position} | {companyName}
        </h2>
        <p className="text-black font-sans text-justify">{description}</p>
      </div>
    </div>
  );
};

const PageTitle = () => {
  return (
    <div className="text-7xl text-amber-600 -rotate-90 -translate-x-48 font-bebas tracking-wider font-bold">
      <span>Work Experience</span>
    </div>
  );
};

const WorkExperienceSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 3000, // durasi animasi dalam milidetik
    });
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="flex-1 flex flex-col gap-5">
      {project.map((item) => (
        <div key={item.id} data-aos="fade-up">
          <ProjectCard
            id={item.id}
            companyName={item.companyName}
            description={item.description}
            years={item.years}
            position={item.position}
            isHovered={hoveredCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      ))}
    </div>
  );
};

const WorkExperienceLayout = () => {
  return (
    <div className="flex h-[100vh] w-full py-4 px-5 md:px-28 flex-row items-center">
      <PageTitle />
      <WorkExperienceSection />
    </div>
  );
};

export default WorkExperienceLayout;
