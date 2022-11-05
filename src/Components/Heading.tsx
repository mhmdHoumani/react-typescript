import React from "react";

type HeadingProps = {
  children: React.ReactNode;
};

const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};

export default Heading;
