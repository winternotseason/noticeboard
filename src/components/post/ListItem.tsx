import React from "react";
import "./ListItem.scss";
import { Link } from "react-router-dom";

type Item = {
  title: string,
  createdAt: string,
  User : {
    nickname: string
  }
}
const ListItem: React.FC<{ post: Item }> = ({ post }) => {
  return (
    <li className="item">
      <Link to={`/main/`} className="item-content">
        <div className="main-content">
          <div className="item-main-title">{post.title}</div>
          <div className="item-discription">
            작성자 : {post.User.nickname} 
          </div>
        </div>
        <div className="posted-date">
          <p>{post.createdAt.slice(0, 10)}</p>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
