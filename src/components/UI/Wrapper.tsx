import React from "react";
import "./Wrapper.scss";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
