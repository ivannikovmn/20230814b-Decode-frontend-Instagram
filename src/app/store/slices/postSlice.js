import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { END_POINT } from '@/config/end-point'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: []
  },
  reducers: {
    setMyPosts: (state, action) => {
        state.posts = action.payload.posts
      },
      uppendPost: (state, action) => {
        state.posts = [...state.posts, action.payload.newpost]
      }
    },
  })

// Action creators are generated for each case reducer function
export const { setMyPosts, uppendPost } = postSlice.actions

export const getMyPosts = () => async (dispatch) => {

  try{
    const res = await axios.get(`${END_POINT}/api/posts/my`)
    console.log(res.data);
    dispatch(setMyPosts({posts: res.data}))
  }catch(e){
    alert("Что-то пошло не так, сообщите об ошибки тех спецам сайта!")
  }
  
}

export const createPost = (sendData, router) => async (dispatch) => {  
  const res = await axios.post(`${END_POINT}/api/posts`, sendData);
  router.push("/posts")
  // console.log(res.data);
  dispatch(uppendPost({newpost: res.data}))  
}

export default postSlice.reducer