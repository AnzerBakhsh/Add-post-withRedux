import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
  { id: '1', title: 'Learning Redux Toolkit', content: 'I have heard good things about Redux Toolkit.', date: sub(new Date(), { minutes: 10 }).toISOString() },
  { id: '2', title: 'Slices', content: 'The more I say "slice", the more I want pizza.', date: sub(new Date(), { minutes: 17 }).toISOString() },
];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
    postDeleted: {
      reducer(state, action) {
        return state.filter(post => post.id !== action.payload);
      },
    },
  },
});

export const { postAdded, postDeleted } = postSlice.actions;

export const selectAllposts = (state) => state.posts;

export default postSlice.reducer;
