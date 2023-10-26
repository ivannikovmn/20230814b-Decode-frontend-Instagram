import axios from 'axios';
import { END_POINT } from '@/config/end-point';

import { createSlice } from '@reduxjs/toolkit';

const storySlice = createSlice({
  name: 'story',
  initialState: {
    stories: [], // Инициализируйте начальное состояние для stories
  },
  reducers: {
    setMyStories: (state, action) => {
      state.stories = action.payload.stories;
    },
    uppendStory: (state, action) => {
      state.stories = [...state.stories, action.payload.newstory];
    },
    handleDeleteStory: (state, action) => {
      let stories = [...state.stories]
      stories = stories.filter(item => item.id !== action.payload)
      state.stories = stories
    }    
    // Добавьте другие редукторы, если необходимо
  },
});

export const { setMyStories, uppendStory, handleDeleteStory } = storySlice.actions;

export const getMyStories = () => async (dispatch) => {
    try {
      const res = await axios.get(`${END_POINT}/api/resumesBefore24hours`);
      dispatch(setMyStories({ stories: res.data }));
      // console.log('dispatch(setMyStories({ stories: res.data }));', dispatch(setMyStories({ stories: res.data })));
    } catch (e) {
      alert("Что-то пошло не так, сообщите об ошибке 1 тех спецам сайта!");
    }
  };

  export const createStory = (sendData, router) => async (dispatch) => {
    const res = await axios.post(`${END_POINT}/api/story`, sendData);
    router.push("/user-profile");
    dispatch(uppendStory({ newstory: res.data }));
  };

  export const deleteStory = (id) => async (dispatch) => {  
    try{      
        const res = await axios.delete(`${END_POINT}/api/post/${id}`); 
        dispatch(handleDeleteStory(id))
    }catch(e){
      console.log(e);
        alert("Что-то пошло не так, сообщите об ошибки тех спецам сайта!")
    }  
  }
  
export default storySlice.reducer;