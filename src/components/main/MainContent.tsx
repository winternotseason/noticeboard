import React from "react";
import Card from "../UI/Card";
import "./MainContent.scss";
import freeicon from "../../assets/free-icon-boat-15106214.png";
import albumicon from "../../assets/free-icon-boat-15106218.png";
import planicon from "../../assets/free-icon-river-15106223.png";
import announceicon from "../../assets/free-icon-water-spring-15106287.png";
import profileicon from "../../assets/free-icon-mountain-15106254.png";
const MainContent = () => {
  return (
    <div>
      <div className="manu">
        <Card img={freeicon} name='게시판0' />
        <Card img={albumicon} name='게시판1'/>
        <Card img={planicon} name='게시판2' />
        <Card img={announceicon} name='게시판3'/>
        <Card img={profileicon} name='게시판4' />
      </div>
    </div>
  );
};

export default MainContent;
