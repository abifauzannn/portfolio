import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../Elements/Button";

const Heading = () => (
  <h1 className="text-amber-600 text-3xl sm:text-4xl font-extrabold md:text-5xl lg:text-3xl font-bebas">
    HI, I AM MOHAMMAD ABI FAUZAN
  </h1>
);

const SubHeading = () => (
  <p className="text-amber-200 text-2xl font-bebas">
    JUNIOR WEB | MOBILE DEVELOPER
  </p>
);

const Description = () => (
  <p className="text-black font-serif text-justify tracking-tighter">
    Hi, I'm Mohammad Abi Fauzan, a Web and Mobile Developer skilled in both
    front-end and back-end technologies. I create dynamic web applications and
    intuitive mobile apps using various programming languages and frameworks.
    Dedicated to delivering high-quality solutions, I focus on crafting
    exceptional digital experiences for users and businesses alike.
  </p>
);

const ViewProjectButton = () => <Button to="/projects" />;

const ContentSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.0 }}
    className="flex justify-center flex-col order-2 lg:order-1 lg:flex-1"
  >
    <Heading />
    <SubHeading />
    <Description />
    <ViewProjectButton />
  </motion.div>
);

const ImageSection = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.0 }}
    className="order-1 lg:order-2 flex-1 flex justify-center"
  >
    <img
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      alt=""
      className="w-[600px] h-full object-cover shadow-md rounded-lg"
    />
  </motion.div>
);

const AboutSection = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:h-[100vh] w-full flex flex-col lg:flex-row items-center py-4 px-5 gap-[30px] lg:gap-[100px] md:px-28"
    >
      <ContentSection />
      <ImageSection />
    </motion.header>
  );
};

export default AboutSection;
