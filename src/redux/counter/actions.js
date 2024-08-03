import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './constants';

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const change_step = step => {
  return {
    type: CHANGE_STEP,
    payload: step,
  };
};
