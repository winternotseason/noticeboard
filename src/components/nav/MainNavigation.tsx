import React, { useState } from "react";
import "./MainNavigation.scss";
import ImageSlide from "../imageslide/imageslide";

const MainNavigation = () => {
  return (
    <>
      <header className="header">
        <nav>
          <div className="profile">
            <h4>NAME</h4>
            <span>님 안녕하세요</span>
          </div>
        </nav>
      </header>
      <ImageSlide />
    </>
  );
};

export default MainNavigation;
