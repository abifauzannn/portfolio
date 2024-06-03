import { Children } from "react";

import React from "react";

const ProjectLayout = (props) => {
  const { children } = props;
  return <div className="container mx-auto">{children}</div>;
};

export default ProjectLayout;
