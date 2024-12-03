import { useSelector} from "react-redux";
import React from 'react'
import { selectAllposts } from "./postSlice";
import PostAuthor from "./postAuthor";
import TimeAgo from "./TimeAgo";

function PostList() {
    const posts = useSelector(selectAllposts);
    const renderPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p> {post.content.substring(0,100)}</p>
            <p className="postCredit">
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
            </p>
        </article>
    ))
    console.log(posts)
  return (
    <section>
        {renderPosts}
    </section>
  )
}

export default PostList