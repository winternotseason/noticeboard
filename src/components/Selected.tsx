import React from "react";
import { Link } from "react-router-dom";
import "./Selected.scss";



const Selected: React.FC<any> = ({ setOnSelectedManu }) => {
    const onClick = () => {
        setOnSelectedManu(false)
    }
  
    return (
    <ul className="list">
      <button onClick={onClick}>x</button>
      <li>
        <Link to="/main">일상</Link>
      </li>
      <li>
        <Link to="/main/profile">사진</Link>
      </li>
      <li>
        <Link to="/main/profile">유머</Link>
      </li>
      <li>
        <Link to="/main/profile">계획</Link>
      </li>
    </ul>
  );
};

export default Selected;
