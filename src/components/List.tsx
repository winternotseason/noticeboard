import React from "react";
import { postList } from "../dummy";
import ListItem from "./ListItem";
import './List.scss';

const List = () => {
  return (
    <div className="post-list">
      <h3>자유</h3>
      <ul>
        {postList.slice(0).reverse().map((post, i) => (
          <ListItem post={post} index={i+1} />
        ))}
      </ul>
    </div>
  );
};

export default List;
