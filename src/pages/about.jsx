import React from "react";
import AboutSection from "../components/Fragments/aboutSetion";
import AboutLayout from "../components/Layouts/aboutLayouts";
import { CSSTransition } from "react-transition-group";
import WorkExperienceLayout from "../components/Fragments/workExperience";

const AboutPage = () => {
  return (
    <AboutLayout>
      <AboutSection />
      <WorkExperienceLayout />
    </AboutLayout>
  );
};

export default AboutPage;
