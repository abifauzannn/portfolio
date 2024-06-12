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
      className={`flex flex-col lg:flex-row bg-white justify-between shadow-lg text-start rounded-lg mb-5 p-5 gap-1 lg:gap-10 lg:-ml-60 transition-opacity duration-300 ${
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
        <h2 className="text-amber-600 text-2xl sm:text-1xl font-extrabold md:text-2xl lg:text-xl font-bebas">
          {position} | {companyName}
        </h2>
        <p className="text-black font-sans text-justify">{description}</p>
      </div>
    </div>
  );
};

const PageTitle = () => {
  return (
    <div className="text-3xl md:text-5xl lg:text-7xl text-amber-600 lg:-rotate-90 lg:-translate-x-48 font-bebas tracking-wider font-bold mb-2 underline sm:no-underline">
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
    <div className="flex-1 flex flex-col gap-2 lg:gap-5">
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
    <div className="flex lg:h-[100vh] w-full py-10 lg:py-4 px-5 md:px-28 flex-col lg:flex-row lg:items-center lg:gap-10">
      <PageTitle />
      <WorkExperienceSection />
    </div>
  );
};

export default WorkExperienceLayout;
