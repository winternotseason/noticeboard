import React from "react";
import { postList } from "../../constants/interface";
import ListItem from "./ListItem";
import './List.scss';

const List:React.FC<{borderTitle:string}> = ({borderTitle}) => {
  return (
    <div className="post-list">
      <h3>{borderTitle}</h3>
      <ul>
        {postList.slice(0).reverse().map((post) => (
          <ListItem post={post}/>
        ))}
      </ul>
    </div>
  );
};

export default List;
