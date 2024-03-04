import React from "react";
import { Post } from "../../constants/interface";
import "./ListItem.scss";
import { Link } from "react-router-dom";

const ListItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <li className="item">
      <Link to={`/main/${post.index}`} className="item-content">
        <div className="main-content">
          <div className="item-main-title">{post.title}</div>
          <div className="item-discription">
            작성자 : {post.name} | 조회 : {post.view}
          </div>
        </div>
        <div className="posted-date">
          <p>2024.02.27</p>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
