import React, { useState } from "react";
import "./MainNavigation.scss";
import profileImg from "../assets/dinosaur-5666127_1280.png";
import Selected from "./Selected";
import ModalBackground from "./ModalBackground";
import { LuMenu } from "react-icons/lu";

const MainNavigation = () => {
  const [SelectedManu, setSelectedManu] = useState(false);
  const handlerSelectedManu = () => {
    setSelectedManu(!SelectedManu);
  };

  return (
    <>
      <header className="header">
        <nav>
          <div className="profile">
            <img src={profileImg} alt="profile" />
            <h4>NAME</h4>
          </div>
          <p onClick={handlerSelectedManu} className="border-list">
            <LuMenu />
          </p>
          {SelectedManu && (
            <Selected
              setSelectedManu={setSelectedManu}
              SelectedManu={SelectedManu}
            />
          )}
        </nav>
      </header>
      <ModalBackground SelectedManu={SelectedManu} />
    </>
  );
};

export default MainNavigation;
