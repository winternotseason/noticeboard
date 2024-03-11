import axios from "axios";
import { useEffect, useState } from "react";
import defaultProfileImg from "../../assets/defaultprofile.jpeg";
import "./Header.scss";

axios.defaults.withCredentials = true;


const Header = () => {
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    const test = async () => {
      await axios
        .get("https://localhost:8001/user")
        .then((res) =>setNickname(res.data.user.nickname));
    };
    test();
  }, []);
  return (
    <header className="header">
      <nav>
        <div className="profile">
          <img src={defaultProfileImg} alt="profile-img" />
          <h4>{nickname}</h4>
          <p>님 환영합니다!</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
