// import { createReducer } from '@reduxjs/toolkit';
// import { change_step, decrement, increment, reset } from './actions';
// import { DECREMENT, INCREMENT, RESET, CHANGE_STEP } from './constants';

// const initialState = {
//   counter: 0,
//   step: 1,
// };
// export const counterReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(increment, (state, action) => {
//       state.counter += state.step;
//     })
//     .addCase(decrement, (state, action) => {
//       state.counter -= state.step;
//     })
//     .addCase(reset, (state, action) => {
//       return initialState;
//     })
//     .addCase(change_step, (state, action) => {
//       state.step = action.payload;
//     });
// });

// Native Redux --> Reducer

// export const counterReducer = (state = initialState, actions) => {
//   switch (actions.type) {
//     case increment.type:
//       return { ...state, counter: state.counter + state.step };

//     case decrement.type:
//       return { ...state, counter: state.counter - state.step };
//     case reset.type:
//       return { ...state, counter: 0, step: 1 };
//     case change_step.type:
//       return {
//         ...state,
//         step: actions.payload,
//       };
//     default:
//       return state;
//   }
// };
