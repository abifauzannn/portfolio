import { Children } from "react";
import "../../aboutLayout.css";

import React from "react";
import "../../aboutLayout.css";

const AboutLayout = (props) => {
  const { children } = props;
  return <div className="container mx-auto">{children}</div>;
};

export default AboutLayout;
