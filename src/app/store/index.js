import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import postReducer from './slices/postSlice'
// import postReducer from './slices/userProfileSlice'
import storyReducer from './slices/storySlice'
import userReducer from './slices/userSlice'
export default configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    story: storyReducer,
    user: userReducer,    
  },
})