import Card from "../UI/Card";
import "./Footer.scss";
import homeicon from "../../assets/free-icon-font-house-chimney-9239307.png";
import infoicon from "../../assets/free-icon-font-user-check-11272018.png";
import chaticon from "../../assets/free-icon-font-comment-alt-dots-9821491.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="fixed">
      <footer>
        <NavLink to="/">
          <Card img={chaticon} />
        </NavLink>
        <NavLink to="/">
          <Card img={homeicon} />
        </NavLink>
        <NavLink to="/mypage">
          <Card img={infoicon} />
        </NavLink>
      </footer>
    </div>
  );
};

export default Footer;
