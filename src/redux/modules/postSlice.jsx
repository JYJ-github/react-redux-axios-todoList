import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetPosts = createAsyncThunk(
  "get/Posts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchCreatePosts = createAsyncThunk(
  "post/Posts",
  async (payload, thunkAPI) => {
    await axios.post("http://localhost:3001/posts", payload);
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    postTodo: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
  extraReducers: {
    [fetchGetPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGetPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [fetchGetPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice;
export const { postTodo } = postSlice.actions;
