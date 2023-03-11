import { ADD, REDUCE } from './actionTypes';

const initialState = {
  counter: 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //counter
    case ADD:
      return { ...state, counter: state.counter + payload };

    case REDUCE:
      return { ...state, counter: state.counter - payload };

    //by default
    default:
      return state;
  }
};
