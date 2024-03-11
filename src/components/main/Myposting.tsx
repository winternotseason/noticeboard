import React from "react";
import { Post } from "./MainContent";
import "./Myposting.scss";

const Mypost: React.FC<{ post: Post }> = ({ post }) => {
    if (post.content.length > 200) {
      post.content = post.content.slice(0, 50) + '...';
    }
  return (
    <li className="content">
      <h3>{post.title}</h3>
      <div className="one">
        <p>{post.content}</p>
      </div>
    </li>
  );
};

export default Mypost;
