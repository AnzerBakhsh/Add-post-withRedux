import { useSelector, useDispatch } from "react-redux";
import React from 'react';
import { selectAllposts, postDeleted } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

function PostList() {
  const posts = useSelector(selectAllposts); 
  const dispatch = useDispatch(); 

  const renderPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p> 
      <p className="postCredit">
        <PostAuthor userId={post.userId} /> 
        <TimeAgo timestamp={post.date} /> 
        <button className="delbtn" onClick={() => handleDeletePost(post.id)}>Delete</button>
      </p>
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
