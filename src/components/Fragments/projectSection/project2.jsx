import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Elements/Button";
import Gambar1 from "../../../assets/4.png";
import Gambar2 from "../../../assets/5.png";

const Heading = () => (
  <h2 className="text-amber-600 text-3xl sm:text-4xl font-extrabold md:text-5xl lg:text-3xl font-bebas">
    Oasys Mobile
  </h2>
);

const SubHeading = () => (
  <p className="text-amber-200 text-2xl font-bebas">
    Mobile Developer | Oasys Edutech Indonesia
  </p>
);

const Description = () => (
  <p className="text-black font-inter text-justify">
    Oasis is an information system within the scope of higher education to
    support operational and academic activities such as study plans, academic
    activities and assessments
  </p>
);

const ViewProjectButton = () => <Button to="/projects" />;

const ContentSection = () => (
  <div className="flex justify-center flex-col order-2 lg:order-1 lg:flex-1">
    <Heading />
    <SubHeading />
    <Description />
    <ViewProjectButton />
  </div>
);

const ImageSection = () => (
  <div className="order-1 lg:order-2 flex-1 flex justify-center shadow-md rounded-lg">
    <img
      src={Gambar2}
      alt=""
      className="w-[600px] h-[200] object-contain shadow-md rounded-lg
    "
    />
  </div>
);

const Project2 = () => {
  return (
    <header className="lg:h-[100vh] w-full flex flex-col lg:flex-row items-center py-4 px-5 gap-[30px] lg:gap-[100px] md:px-28">
      <ContentSection />
      <ImageSection />
    </header>
  );
};

export default Project2;
