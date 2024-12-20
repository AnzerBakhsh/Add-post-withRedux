
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import React from 'react'
import { selectAllUsers } from "../users/userSlice";

function AddPostForm() {

    const dispatch = useDispatch()

    const [title,settitle] = useState('')
    const [content, setcontent] = useState('')
    const [userId, setuserId] = useState('')
   

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => settitle(e.target.value)
    const onContentChanged = e => setcontent(e.target.value)
    const onAuthorChanged = e => setuserId(e.target.value)


    const onSavePostClicked = () =>{
            if(title && content){
                dispatch(
                    postAdded(title,content, userId)
                )
                settitle('')
                setcontent('')
            }
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)


    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
  return (
    <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor="postTitle"> Post Title</label>
            <input type="text" 
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}/>
            <label htmlFor="postAuthor">Author :</label>
            <select name="" id="postAuthor" value={userId} onChange={onAuthorChanged}>
                <option value=""></option>
                {usersOptions}
            </select>
            <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post
                </button>
        </form>
    </section>
  )
}

export default AddPostForm