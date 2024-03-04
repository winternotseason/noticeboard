import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
  useEffect(() => {
    const getUser = async () => {
      const data = await axios.get("https://localhost:8001/userinfo", {
        withCredentials: true,
      });
      console.log(data);
    };
    getUser();
  }, []);
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
