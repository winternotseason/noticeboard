import React from "react";
import "./UiContainer.scss";

const UiContainer: React.FC<{ children: any }> = (props) => {
  return <div className="container">{props.children}</div>;
};

export default UiContainer;
