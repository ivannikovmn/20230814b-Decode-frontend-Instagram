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
    }
  },
}) 

// Action creators are generated for each case reducer function
export const { setMyPosts } = postSlice.actions

export const getMyPosts = () => async (dispatch) => {

  try{
    const res = await axios.get(`${END_POINT}/api/posts/my`)
    console.log(res.data);
    dispatch(setMyPosts({posts: res.data}))
  }catch(e){
    alert("Что-то пошло не так, сообщите об ошибки тех спецам сайта!")
  }
  
}


export default postSlice.reducer