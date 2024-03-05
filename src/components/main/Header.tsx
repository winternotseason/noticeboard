import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./Header.scss";

const Header = () => {
  const email = useSelector((state: RootState) => state.user.email);
  const [userNick, setUserNick] = useState("");
  const getUserNickname = async () => {
    await axios
      .post("https://localhost:8001/usernick", { email })
      .then((res) => setUserNick(res.data.nickname))
      .catch((err)=> console.error(err))
  };
  getUserNickname();

  return (
    <header className="header">
      <nav>
        <div className="profile">
          <h4>{userNick}</h4>
          <p>님 환영합니다!</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
