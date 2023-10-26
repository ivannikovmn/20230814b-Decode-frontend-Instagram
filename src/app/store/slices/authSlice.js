import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import jwt_decode from "jwt-decode"

import { END_POINT } from '@/config/end-point'

let initialState = {
  isAuth: false,
  currentUser: null,
  tokenExt: 0, 
  // user: {
  //   email: null,
  //   // другие свойства, которые вы хотите добавить
  // },
}


// const token = localStorage.getItem("token")
// // console.log(token);
// if(token) {
//   let decodeToken = jwt_decode(token)
//   if(decodeToken.exp * 1000 > Date.now() ) {
//     initialState = {
//       isAuth: true,
//       currentUser: {
//         id: decodeToken.id,
//         email: decodeToken.email,
//         full_name: decodeToken.full_name,
//         phone: decodeToken.phone,
//         role: decodeToken.role,
//       },
//       tokenExt: decodeToken.exp   
//     }
//     console.log('initialState', initialState);
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//   } else {
//     localStorage.removeItem("token")   
//   }
// }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize: (state, action) => {
    localStorage.setItem("token", action.payload.token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`      
    const decoded = jwt_decode(action.payload.token)
      state.currentUser = {
        id: decoded.id,
        email: decoded.email,
        full_name: decoded.full_name,
        phone: decoded.phone,
        role: decoded.role,
      }
      state.isAuth = true

      state.tokenExt = decoded.exp
    },
    logOut: (state) => {
      state.isAuth = false
      state.currentUser = null;
      state.exp = 0;
      localStorage.removeItem("token")
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },    
    // setUserData: (state, action) => {
    //   state.user = action.payload.user;
    // },
  },
}) 

// Action creators are generated for each case reducer function
// export const { authorize, logOut, setEmail, setId, setUserData } = authSlice.actions
export const { authorize, logOut, setEmail, setId } = authSlice.actions

export const sendVerificationEmail = (email) => (dispatch) => {
  
  axios.post(`${END_POINT}/api/auth/sendmail`, {
    email
  })

  // dispatch(incrementByAmount(amount))

}

export const verifyCode = (email, code) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/verifycode`, {
    email,
    code
  }).then(res => {
    // console.log(res.data);
    dispatch(authorize(res.data))

  })
}

// export const getUserById = (id) => async (dispatch) => {
//   try {
//     const res = await axios.get(`${END_POINT}/api/auth/users/byUsername/${id}`);
//     console.log(res.data); // Вывод данных в консоль
//     dispatch(setUserData({ user: res.data }));
//   } catch (e) {
//     console.error("Ошибка при загрузке данных пользователя:", e);
//     alert("Что-то пошло не так, сообщите об ошибке техническим специалистам сайта!");
//   }
// }



export default authSlice.reducer