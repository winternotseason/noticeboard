import React, { useState } from "react";

import "./MainNavigation.scss";
import profileImg from "../assets/dinosaur-5666127_1280.png";
import Selected from "./Selected";

const MainNavigation = () => {
  const [onSelectedManu, setOnSelectedManu] = useState(false);
  const onSelectedManuHanlder = () => {
    setOnSelectedManu(!onSelectedManu);
  };

  return (
    <header className="header">
      <nav>
        <div className="profile">
          <img src={profileImg} alt="profile" />
          <h4>karina</h4>
        </div>
        <p onClick={onSelectedManuHanlder} className="border-list">
          게시판 목록
        </p>
        {onSelectedManu && <Selected setOnSelectedManu={setOnSelectedManu} />}
      </nav>
    </header>
  );
};

export default MainNavigation;
