import React from "react";
import "./Center.css";

// This is a Decorator. This wraps around other UI elements
const Center = (props) => {
  return <div className="center">{props.children}</div>;
};

export default Center;
