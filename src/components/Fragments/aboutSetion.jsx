import React from "react";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const Heading = () => (
  <h1 className="text-amber-600 text-3xl sm:text-4xl font-extrabold md:text-5xl lg:text-3xl font-bebas">
    HI, I AM MOHAMMAD ABI FAUZAN
  </h1>
);

const SubHeading = () => (
  <p className="text-amber-200 text-2xl font-bebas">WEB | MOBILE DEVELOPER</p>
);

const Description = () => (
  <p className="text-black font-inter text-justify">
    Hi, I am Mohammad Abi Fauzan, a passionate and skilled Web and Mobile
    Developer. With a strong foundation in both front-end and back-end
    technologies, I create dynamic and responsive web applications as well as
    intuitive mobile apps. My expertise spans across multiple programming
    languages and frameworks, enabling me to deliver high-quality solutions that
    meet the needs of users and businesses alike. Whether it's building a robust
    web platform or a sleek mobile app, I am dedicated to crafting exceptional
    digital experiences.
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
  <div className="order-1 lg:order-2 flex-1 flex justify-center">
    <img
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      alt=""
      className="w-[600px] h-full object-cover shadow-md rounded-lg"
    />
  </div>
);

const AboutSection = () => {
  return (
    <header className="lg:h-[100vh] w-full flex flex-col lg:flex-row items-center py-4  px-5 gap-[30px] lg:gap-[100px] md:px-28">
      <ContentSection />
      <ImageSection />
    </header>
  );
};

export default AboutSection;
