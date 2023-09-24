import React, { HTMLProps } from "react";

export const H1: React.FC<HTMLProps<HTMLHeadingElement>> = (props) => {
  return <h1 className="text-xl" {...props} />;
};

H1.displayName = "h1";
