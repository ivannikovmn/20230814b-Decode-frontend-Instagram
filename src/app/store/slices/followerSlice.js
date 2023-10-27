import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { END_POINT } from '@/config/end-point'

let initialState = {
    followers: [],
    follower: {}
  }

export const followerSlice = createSlice({
  name: 'follower',
  initialState,
  reducers: {    
    appendFollower: (state, action) => {
        state.followers = [...state.followers, action.payload]
      },  
      removeFollower: (state, action) => {
        let followers = [...state.followers]
        followers = followers.filter(item => item.id !== action.payload)
        state.followers = followers    
    },
  },
}) 

// Action creators are generated for each case reducer function
export const { appendFollower, removeFollower } = followerSlice.actions

export const createFollower = (data) => (dispatch) => {
    axios.post(`${END_POINT}/api/followers`, data).then(res => {  
      
      dispatch(appendFollower(res.data))    
  
    }).catch(e => {  
      console.log(e);
    })
  }

  export const deleteFollower = (id) => (dispatch) => {
    axios.delete(`${END_POINT}/api/followers/${id}`).then(res => {   
      dispatch(removeFollower(id))      
      alert ("Как подписчик успешно удален")
    }).catch(e => {  
      console.log(e);
    })
  }

export default followerSlice.reducer