import { getData, setData } from "../../utiles/getData";
import { ADD, REDUCE } from "./actionTypes";

const initialState = {
  counter: getData("count") || 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //counter
    case ADD:
      setData("count", state.counter + payload);
      return { ...state, counter: state.counter + payload };

    case REDUCE:
      setData("count", state.counter - payload);
      return { ...state, counter: state.counter - payload };

    //by default
    default:
      return state;
  }
};
