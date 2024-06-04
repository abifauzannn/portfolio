import React from "react";
import AboutSection from "../components/Fragments/aboutSetion";
import AboutLayout from "../components/Layouts/aboutLayouts";
import { CSSTransition } from "react-transition-group";

const AboutPage = () => {
  return (
    <AboutLayout>
      <AboutSection />
    </AboutLayout>
  );
};

export default AboutPage;
