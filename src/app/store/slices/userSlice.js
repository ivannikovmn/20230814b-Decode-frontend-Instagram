import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { END_POINT } from '@/config/end-point'


export const userSlice = createSlice({
  name: 'user',
  initialState: {    
    user: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
    }    
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions


export const getUserById = (id) => async (dispatch) => {
  // dispatch(setLoading()) 
  try {    
      // dispatch(setLoading())         
      const res = await axios.get(`${END_POINT}/api/auth/users/byUsername/${id}`);
      console.log(res.data);
      dispatch(setUser({user: res.data}))
      // dispatch(setLoading())     
    //   dispatch(setLoadingFalse())  
  } catch(e) {
      alert("Что-то пошло не так, сообщите об ошибки тех спецам сайта!")
  }
  
}

export default userSlice.reducer