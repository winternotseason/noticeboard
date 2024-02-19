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
          <Link to="/main">메인</Link>
        </li>
        <li onClick={onClick}>
          <Link to="/main/free">자유</Link>
        </li>
        <li onClick={onClick}>
          <Link to="/main/album">앨범</Link>
        </li>
        <li onClick={onClick}>
          <Link to="/main/announce">공지사항</Link>
        </li>
      </ul>
    </div>
  );
};

export default Selected;
