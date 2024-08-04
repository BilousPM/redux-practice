import { createAction } from '@reduxjs/toolkit';
// import { CHANGE_STEP,INCREMENT, DECREMENT, RESET } from './constants';

// export const increment = () => {
//   return { type: INCREMENT };
// };

// export const decrement = () => {
//   return {
//     type: DECREMENT,
//   };
// };

// export const reset = () => {
//   return {
//     type: RESET,
//   };
// };

// export const change_step = step => {
//   return {
//     type: CHANGE_STEP,
//     payload: step,
//   };
// };

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const change_step = createAction('change_step');
