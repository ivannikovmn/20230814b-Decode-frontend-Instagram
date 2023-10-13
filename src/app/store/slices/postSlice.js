import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { END_POINT } from '@/config/end-point';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    followers: []
  },
  reducers: {
    setMyPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    uppendPost: (state, action) => {
      state.posts = [...state.posts, action.payload.newpost];
    },
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
    handleDeletePost: (state, action) => {
      let posts = [...state.posts]
      posts = posts.filter(item => item.id !== action.payload)
      state.posts = posts
    },
  },
})

export const { setMyPosts, uppendPost, setFollowers, handleDeletePost } = postSlice.actions;

export const getMyPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${END_POINT}/api/posts/my`);
    dispatch(setMyPosts({ posts: res.data }));
  } catch (e) {
    alert("Что-то пошло не так, сообщите об ошибке 1 тех спецам сайта!");
  }
};

export const getFollowers = () => async (dispatch) => {
  try {
    const res = await axios.get(`${END_POINT}/api/followers/byUsername/1`);
    const data = res.data;
    dispatch(setFollowers(data));
    return data;
  } catch (error) {
    alert("Что-то пошло не так, сообщите об ошибке 2 тех спецам сайта!");
    throw error;
  }
};

export const createPost = (sendData, router) => async (dispatch) => {
  const res = await axios.post(`${END_POINT}/api/posts`, sendData);
  router.push("/user-profile");
  dispatch(uppendPost({ newpost: res.data }));
};

export const deletePost = (id) => async (dispatch) => {  
  try{      
      const res = await axios.delete(`${END_POINT}/api/post/${id}`); 
      dispatch(handleDeletePost(id))
  }catch(e){
    console.log(e);
      alert("Что-то пошло не так, сообщите об ошибки тех спецам сайта!")
  }  
}

export default postSlice.reducer;
