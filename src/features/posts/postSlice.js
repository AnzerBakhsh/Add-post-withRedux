import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'



const initialState=[
{id: '1' , title: 'Learning Redux Toolkit' , content: 'i have heared a good things',
    date:sub(new Date(), {minutes: 10}).toISOString(),
},
{id: '2' , title: 'Slices' , content: 'the more i say Slice have the more i want pizza',
    date:sub(new Date(), {minutes: 17}).toISOString(),
},

]

 const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers :{
        postAdded:{
            reducer(state ,action){
                state.push(action.payload)
        },
        prepare(title, content,userId){
            return{
                payload :{
                    id:nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(), 
                    userId
                }
            }
        }
    
    }

    }

 })
 export const {postAdded} = postSlice.actions;
 export const  selectAllposts = (state) => state.posts;
 export default postSlice.reducer;
