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
    // Добавьте другие редукторы, если необходимо
  },
});

export const { setMyStories } = storySlice.actions;

export const getMyStories = () => async (dispatch) => {
    try {
      const res = await axios.get(`${END_POINT}/api/resumesBefore24hours`);
      dispatch(setMyStories({ stories: res.data }));
      console.log('dispatch(setMyStories({ stories: res.data }));', dispatch(setMyStories({ stories: res.data })));
    } catch (e) {
      alert("Что-то пошло не так, сообщите об ошибке 1 тех спецам сайта!");
    }
  };
  
export default storySlice.reducer;