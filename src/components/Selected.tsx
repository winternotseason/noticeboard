import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Selected.scss";

const Selected: React.FC<any> = ({ setOnSelectedManu, onSelectedManu }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onClick = () => {
    setOnSelectedManu(false);
  };

  useEffect(() => {
    function handleClickOutside(e: any): void {
      if (ref.current && !ref.current.contains(e.target)) {
        setOnSelectedManu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="list-container" ref={ref}>
      <ul className="list">
        <li onClick={onClick}>
          <Link to="/main" className="list-content">
            메인
          </Link>
        </li>
        <li onClick={onClick}>
          <Link to="/main/free" className="list-content">
            자유
          </Link>
        </li>
        <li onClick={onClick}>
          <Link to="/main/album" className="list-content">
            앨범
          </Link>
        </li>
        <li onClick={onClick}>
          <Link to="/main/announce" className="list-content">
            공지사항
          </Link>
        </li>
        <div onClick={onClick}>
          <Link to="/" className="logout">
            로그아웃
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Selected;
