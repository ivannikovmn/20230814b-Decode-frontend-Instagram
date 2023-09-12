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
<<<<<<< HEAD
    const res = await axios.get(`${END_POINT}/api/posts/my`)
    console.log(res.data);
    dispatch(setMyPosts({posts: res.data}))
=======
    const pos = await axios.get(`${END_POINT}/api/posts/my`)
    console.log(pos.data);
    dispatch(setMyPosts({pos: pos.data}))
>>>>>>> 75dbec90a1b66f55fc1e47de2e19358af845e802
  }catch(e){
    alert("Что-то пошло не так, сообщите об ошибки тех спецам сайта!")
  }
  
}


export default postSlice.reducer