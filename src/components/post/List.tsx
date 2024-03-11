import React, { useEffect, useState } from "react";

import ListItem from "./ListItem";
import "./List.scss";
import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";
import axios from "axios";

const List = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      await axios
        .get("https://localhost:8001/allposts")
        .then((res) => setPosts(res.data));
    };
    getPosts();
  }, []);
  console.log(posts)
  return (
    <div className="post-list">
      <div className="post-list-header">
        <h3>소통해보세요!</h3>
        <Link to="/posting">
          <TfiWrite className="btn" />
        </Link>
      </div>
      <div className="post-list-content">
        <ul className="posts">
          {posts &&
            posts
              ?.slice(0)
              .reverse()
              .map((post) => <ListItem post={post} />)}
        </ul>
      </div>
    </div>
  );
};

export default List;
