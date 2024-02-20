import React from 'react';
import { Post, postList } from '../dummy';
import './ListItem.scss';

const ListItem:React.FC<{post:Post; index:number}> = ({post,index}) => {

    return (
        <div className='item'>
            <div className='item-main-content'>{post.title}</div>
            <div className='item-sub-content'>{post.name} | 조회 : {post.view}</div>
        </div>
    );
};

export default ListItem;