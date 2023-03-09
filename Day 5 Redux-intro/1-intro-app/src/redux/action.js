import { ADD, REDUCE } from "./actionTypes";

export const addAction = (payload) => {
  return { type: ADD, payload: payload };
};

export const reduceAction = () => {
  return { type: REDUCE, payload: 1 };
};
