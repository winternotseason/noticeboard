import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Selected.scss";
import { useAppDispatch } from "../../hooks";
import { authActions } from "../../store/auth";

const Selected: React.FC<any> = ({ setSelectedManu }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  /* 목록 메뉴 컨테이너 reference */
  const ref = useRef<HTMLDivElement>(null);

  const onClick = () => {
    setSelectedManu(false);
  };

  /* 드롭 메뉴 열린 상태에서 메뉴 창 밖을 클릭하면 메뉴가 off되는 기능*/
  useEffect(() => {
    function handleClickOutside(e: any): void {
      if (ref.current && !ref.current.contains(e.target)) {
        setSelectedManu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handlerSuccessLogout = (e: React.FormEvent<HTMLDivElement>) => {
    dispatch(authActions.logout());
    navigate("/login");
  };
  return (
    <div className="list-container" ref={ref}>
      <ul className="list">
        <li onClick={onClick}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "list-content active" : "list-content"
            }
            end
          >
            메인
          </NavLink>
        </li>
        <li onClick={onClick}>
          <NavLink
            to="/free"
            className={({ isActive }) =>
              isActive ? "list-content active" : "list-content"
            }
          >
            자유
          </NavLink>
        </li>
        <li onClick={onClick}>
          <NavLink
            to="/album"
            className={({ isActive }) =>
              isActive ? "list-content active" : "list-content"
            }
          >
            앨범
          </NavLink>
        </li>
        <li onClick={onClick}>
          <NavLink
            to="/announce"
            className={({ isActive }) =>
              isActive ? "list-content active" : "list-content"
            }
          >
            공지사항
          </NavLink>
        </li>
        <div onClick={handlerSuccessLogout}>
          <NavLink to="/login" className="logout">
            로그아웃
          </NavLink>
        </div>
      </ul>
    </div>
  );
};

export default Selected;
