import React from "react";
import { postList } from "../dummy";
const List = () => {
  return (
    <div className="post-list">
      <ul>
        {postList.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
