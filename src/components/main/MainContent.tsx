import { NavLink } from "react-router-dom";
import Card from "../UI/Card";
import "./MainContent.scss";
import freeicon from "../../assets/free-icon-boat-15106214.png";
import albumicon from "../../assets/free-icon-boat-15106218.png";
import planicon from "../../assets/free-icon-river-15106223.png";
import announceicon from "../../assets/free-icon-water-spring-15106287.png";
import profileicon from "../../assets/free-icon-mountain-15106254.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Mypost from "./Myposting";

export type Post = {
  title: string;
  content: string;
  createdAt: string;
};
const MainContent = () => {
  const [recentPosts, setRecentPosts] = useState<Post[]>();
  useEffect(() => {
    const getMyPosting = async () => {
      await axios
        .get("https://localhost:8001/posts")
        .then((res) => setRecentPosts(res.data.posts.slice(-2)));
    };
    getMyPosting();
  }, []);
  console.log(recentPosts);
  return (
    <div className="main-content">
      <div className="manu">
        <NavLink className="deco-none" to="/board">
          <Card img={freeicon} name="게시판" />
        </NavLink>
      </div>
      <div className="my-content">
        <h3>
          <span className="green">내</span> 최근 게시글
        </h3>
        <ul className="content-list">
          {recentPosts?.map((post) => (
            <Mypost post={post} />
          ))}
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
