import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import List from "../components/post/List";
import { useAppSelector } from "../hooks";

const Main = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  });
  return <List borderTitle="자유" />;
};

export default Main;
