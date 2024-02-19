import React, { useState } from "react";

import "./MainNavigation.scss";
import profileImg from "../assets/dinosaur-5666127_1280.png";
import Selected from "./Selected";
import ModalBackground from "./ModalBackground";
import { LuMenu } from "react-icons/lu";

const MainNavigation = () => {
  const [onSelectedManu, setOnSelectedManu] = useState(false);
  const onSelectedManuHanlder = () => {
    setOnSelectedManu(!onSelectedManu);
  };

  return (
    <>
      <header className="header">
        <nav>
          <div className="profile">
            <img src={profileImg} alt="profile" />
            <h4>NAME</h4>
          </div>
          <p onClick={onSelectedManuHanlder} className="border-list">
            <LuMenu />
          </p>
          {onSelectedManu && (
            <Selected
              setOnSelectedManu={setOnSelectedManu}
              onSelectedManu={onSelectedManu}
            />
          )}
        </nav>
      </header>
      <ModalBackground onSelectedManu={onSelectedManu} />
    </>
  );
};

export default MainNavigation;
