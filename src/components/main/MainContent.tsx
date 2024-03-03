import { NavLink } from "react-router-dom";
import Card from "../UI/Card";
import "./MainContent.scss";
import freeicon from "../../assets/free-icon-boat-15106214.png";
import albumicon from "../../assets/free-icon-boat-15106218.png";
import planicon from "../../assets/free-icon-river-15106223.png";
import announceicon from "../../assets/free-icon-water-spring-15106287.png";
import profileicon from "../../assets/free-icon-mountain-15106254.png";
const MainContent = () => {
  return (
    <div className="main-content">
      <div className="manu">
        <NavLink className="deco-none" to="/album">
          <Card img={freeicon} name="게시판0" />
        </NavLink>
        <NavLink className="deco-none" to="/login">
          <Card img={albumicon} name="게시판1" />
        </NavLink>
        <NavLink className="deco-none" to="/login">
          <Card img={planicon} name="게시판2" />
        </NavLink>
        <NavLink className="deco-none" to="/login">
          <Card img={announceicon} name="게시판3" />
        </NavLink>
        <NavLink className="deco-none" to="/login">
          <Card img={profileicon} name="게시판4" />
        </NavLink>
      </div>
      <div className="my-content">
        <h3>
          <span className="green">내</span> 게시글
        </h3>
        <ul className="content-list">
          <li className="content"></li>
          <li className="content"></li>
        </ul>
      </div>
      <div className="my-content">
        <h3>계획</h3>
        <ul className="content-list">
          <li className="content"></li>
          <li className="content"></li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
