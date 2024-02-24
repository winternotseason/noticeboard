import React from "react";
import "./UiContainer.scss";

const UiContainer: React.FC<{ children: JSX.Element }> = ({children}) => {
  return <div className="container">{children}</div>;
};

export default UiContainer;
