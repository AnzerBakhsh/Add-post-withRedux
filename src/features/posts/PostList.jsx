import { useSelector, useDispatch } from "react-redux";
import React from 'react';
import { selectAllposts, postDeleted } from "./postSlice";
import PostAuthor from '../posts/postAuthor'; 

import TimeAgo from "./TimeAgo";

function PostList() {
  const posts = useSelector(selectAllposts); 
  const dispatch = useDispatch(); 

  const renderPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p> 
      <div className="postCredit"> 
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} /> 
        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
      </div>
    </article>
  ));

  function handleDeletePost(id) {
    dispatch(postDeleted(id)); 
  }

  return (
    <section>
      {renderPosts} 
    </section>
  );
}

export default PostList;
