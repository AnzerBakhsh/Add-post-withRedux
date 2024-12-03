import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'anzer' },
  { id: '1', name: 'muzammil' },
  { id: '2', name: 'furqan' }
];

// Create the userSlice
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Add user related reducers here if needed in the future
  }
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer