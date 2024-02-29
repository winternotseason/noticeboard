import Card from "../UI/Card";
import "./Footer.scss";
import homeicon from "../../assets/free-icon-font-house-chimney-9239307.png";
import infoicon from "../../assets/free-icon-font-user-check-11272018.png";
import chaticon from "../../assets/free-icon-font-comment-alt-dots-9821491.png";
const Footer = () => {
  return (
    <footer>
      <Card img={chaticon} />
      <Card img={homeicon} />
      <Card img={infoicon} />
    </footer>
  );
};

export default Footer;
