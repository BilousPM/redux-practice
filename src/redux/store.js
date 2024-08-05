import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter/slice';
import { taskReducer } from './task/tasksSlice';
// import { counterReducer } from './counter/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
  },
});
