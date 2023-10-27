import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { END_POINT } from '@/config/end-point'

let initialState = {
    followed: [],
    follow: {}
  }

export const followSlice = createSlice({
  name: 'follow',
  initialState,
  reducers: {    
    appendFollow: (state, action) => {
        state.followed = [...state.followed, action.payload]
      },  
      removeFollow: (state, action) => {
        let followed = [...state.followed]
        followed = followed.filter(item => item.id !== action.payload)
        state.followed = followed
    },
  },
}) 

// Action creators are generated for each case reducer function
export const { appendFollow, removeFollow } = followSlice.actions

export const createFollower = (data) => (dispatch) => {
    axios.post(`${END_POINT}/api/followed`, data).then(res => {  
      
      dispatch(appendFollow(res.data))    
  
    }).catch(e => {  
      console.log(e);
    })
  }

  export const deleteFollow = (id) => (dispatch) => {
    axios.delete(`${END_POINT}/api/followed/${id}`).then(res => {   
      dispatch(removeFollow(id))      
      alert ("Отписка успешно осуществлена")
    }).catch(e => {  
      console.log(e);
    })
  }

export default followSlice.reducer