import React from "react";
import { postList } from "../../constants/interface";
import ListItem from "./ListItem";
import "./List.scss";
import { Link } from "react-router-dom";

const List: React.FC<{ borderTitle: string }> = ({ borderTitle }) => {
  return (
    <div className="post-list">
      <div className="post-list-header">
        <div></div>
        <h3>{borderTitle}</h3>
        <Link to="/posting"><button className="btn">글쓰기</button></Link>
      </div>
      <div className="post-list-content">
        <ul>
          {postList
            .slice(0)
            .reverse()
            .map((post) => (
              <ListItem post={post} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
