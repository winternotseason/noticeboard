import React from "react";
import "./Card.scss";

type icon = {
  img: string;
  name?: string;
};

const Card: React.FC<icon> = ({ img, name }) => {
  return (
    <div className="card">
      {name ? (
        <>
          <img src={img} alt="icon" className="big-icon" />
          <p>{name}</p>
        </>
      ) : (
        <>
          <img src={img} alt="icon" className="footer-icon"/>
        </>
      )}
    </div>
  );
};

export default Card;
