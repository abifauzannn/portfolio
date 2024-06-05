import Gambar1 from "../../assets/4.png";
import Gambar2 from "../../assets/5.png";
import ButtonLanguage from "../Elements/ButtonLanguage";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const project = [
  {
    id: 1,
    name: "Brainys",
    subname: "Front End Web Developer | Oasys Edutech Indonesia",
    description:
      "Brainys is an application that can help teachers / teaching staff to obtain creative ideas within the scope of administration and academic activities",
    image: Gambar1,
    languages: ["HTML", "CSS", "Javascript", "PHP", "Laravel"],
  },
  {
    id: 2,
    name: "Oasys Mobile",
    description:
      "Oasis is an information system within the scope of higher education to support operational and academic activities such as study plans, academic activities and assessments",
    image: Gambar2,
    languages: ["Flutter", "Dart"],
  },
];

const ProjectCard = ({ name, description, image, languages, subname, id }) => {
  const imagePosition =
    id % 2 !== 0
      ? "order-1 lg:order-2 flex-1 flex"
      : "order-1 lg:order-1 flex-1 flex";

  const headerPosition =
    id % 2 !== 0
      ? "order-2 lg:order-1 lg:flex-1"
      : "order-2 lg:order-2 lg:flex-1";

  return (
    <header className="lg:h-[100vh] w-full flex flex-col lg:flex-row items-center py-4 px-5 gap-[30px] lg:gap-[100px] md:px-28 ">
      <div
        className={`${headerPosition} flex justify-center flex-col order-2 lg:order-1 lg:flex-1`}
      >
        <h2 className="text-amber-600 text-3xl sm:text-4xl font-extrabold md:text-5xl lg:text-3xl font-bebas">
          {name}
        </h2>
        <p className="text-amber-200 text-2xl font-bebas">{subname}</p>
        <p className="text-black font-sans">{description}</p>
        <ButtonLanguage text={languages} />
      </div>
      <div className={`justify-center shadow-md rounded-lg ${imagePosition}`}>
        <img
          src={image}
          alt=""
          className="shadow-md rounded-lg hover:scale-105 duration-500 bg-bl "
        />
      </div>
    </header>
  );
};

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // durasi animasi dalam milidetik
    });
  }, []);

  return (
    <div className="flex justify-around flex-col sm:gap-10  py-4 px-5 gap-[30px] lg:gap-[100px] md:px-28">
      {project.map((item) => (
        <div key={item.id} data-aos="fade-up">
          <ProjectCard
            id={item.id}
            name={item.name}
            description={item.description}
            subname={item.subname}
            image={item.image}
            languages={item.languages}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectSection;
