import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import List from "../components/post/List";
import { useAppSelector } from "../hooks";

const Main = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.isAuthenticated);
  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:8001/", {
        withCredentials: true,
      });
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <List borderTitle="자유" />
      <button onClick={fetchData}>요청</button>
    </>
  );
};

export default Main;
