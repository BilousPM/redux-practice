import { DECREMENT, INCREMENT, RESET, CHANGE_STEP } from './constants';

const initialState = {
  counter: 0,
  step: 1,
};

export const counterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + state.step };

    case DECREMENT:
      return { ...state, counter: state.counter - state.step };
    case RESET:
      return { ...state, counter: 0, step: 1 };
    case CHANGE_STEP:
      return {
        ...state,
        step: actions.payload,
      };
    default:
      return state;
  }
};
