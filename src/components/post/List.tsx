import React from "react";
import { postList } from "../../constants/interface";
import ListItem from "./ListItem";
import "./List.scss";
import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";

const List: React.FC<{ borderTitle: string }> = ({ borderTitle }) => {
  return (
    <div className="post-list">
      <div className="post-list-header">
        <h3>{borderTitle}</h3>
        <Link to="/posting">
          <TfiWrite className="btn" />
        </Link>
      </div>
      <div className="post-list-content">
        <ul className="posts">
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
