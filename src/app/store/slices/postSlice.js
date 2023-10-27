import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { END_POINT } from '@/config/end-point';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    followers: [],
    followed: [],
    comment: [],
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
    setFollowed: (state, action) => {
      state.followed = action.payload;
    },
    setCommentData: (state, action) => {
      state.comment = action.payload.comment;
    },
    handleDeletePost: (state, action) => {
      let posts = [...state.posts]
      posts = posts.filter(item => item.id !== action.payload)
      state.posts = posts
    },
    handleDeleteComment: (state, action) => {
      let comment = [...state.comment]
      comment = comment.filter(item => item.id !== action.payload)
      state.comment = comment
    },
  },
})

export const { setMyPosts, uppendPost, setFollowers, setFollowed, handleDeletePost, setCommentData, handleDeleteComment } = postSlice.actions;

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${END_POINT}/api/posts`);
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

export const getFollowed = () => async (dispatch) => {
  try {
    const res = await axios.get(`${END_POINT}/api/followed/byUsername/1`);
    const data = res.data;
    dispatch(setFollowed(data));
    return data;
  } catch (error) {
    alert("Что-то пошло не так, сообщите об ошибке 2 тех спецам сайта!");
    throw error;
  }
};

export const createPost = (sendData, router) => async (dispatch) => {
  const res = await axios.post(`${END_POINT}/api/post`, sendData);
  router.push("/user-profile");
  dispatch(uppendPost({ newpost: res.data }));
};

export const editPost = (sendData, router) => async (dispatch) => {  
  try {   
    // console.log("Отправка данных на сервер:", sendData);
    const res = await axios.put(`${END_POINT}/api/post`, sendData);
    // console.log("Ответ от сервера:", res);   
    router.push("/login");
  } catch (e) {
    console.log(e);
    alert("Что-то пошло не так, сообщите об ошибке технической поддержке!");
  }  
}

export const deletePost = (id) => async (dispatch) => {  
  try{      
      const res = await axios.delete(`${END_POINT}/api/post/${id}`); 
      dispatch(handleDeletePost(id))
  }catch(e){
    console.log(e);
      alert("Что-то пошло не так, сообщите об ошибки тех спецам сайта!")
  }  
}

export const createComment = (sendData, router) => async (dispatch) => {
  const res = await axios.post(`${END_POINT}/api/comments`, sendData);
  router.push("/login");
  // dispatch(uppendPost({ newpost: res.data }));
};

export const getCommentById = (id) => async (dispatch) => {
  // dispatch(setLoading()) 
  try {    
      // dispatch(setLoading())         
      const res = await axios.get(`${END_POINT}/api/comments/byIdPostStory/${id}`);
      console.log('res.data', res.data);
      // dispatch(setComment({comment: res.data}))
      dispatch(setCommentData({comment: res.data}));
      // dispatch(setLoading())     
      // dispatch(setLoadingFalse())  
  } catch(e) {
      alert("Что-то пошло не так, сообщите об ошибки тех спецам сайта!")
  }
  
}

export const deleteComment = (id) => async (dispatch) => {  
  try{      
      const res = await axios.delete(`${END_POINT}/api/comments/${id}`); 
      dispatch(handleDeleteComment(id))
  }catch(e){
    console.log(e);
      alert("Что-то пошло не так, сообщите об ошибки тех спецам сайта!")
  }  
}

export default postSlice.reducer;
