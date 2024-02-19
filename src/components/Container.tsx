import React from "react";
import "./Container.scss";
import LoginBox from "./LoginBox";

const Container: React.FC = () => {
  return (
    <div className="container">
      <LoginBox />
    </div>
  );
};

export default Container;
