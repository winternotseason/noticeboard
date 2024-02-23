import React from "react";
import { postList } from "../dummy";
import ListItem from "./ListItem";
import './List.scss';

const List:React.FC<{bordername:string}> = ({bordername}) => {
  return (
    <div className="post-list">
      <h3>{bordername}</h3>
      <ul>
        {postList.slice(0).reverse().map((post) => (
          <ListItem post={post}/>
        ))}
      </ul>
    </div>
  );
};

export default List;
