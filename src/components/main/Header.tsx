import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="profile">
          <h4>김민정</h4>
          <p>님 환영합니다!</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
