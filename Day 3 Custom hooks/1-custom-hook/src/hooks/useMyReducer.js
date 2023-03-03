import { useState } from "react";

export const useMyReducer = (reducer, initVal) => {
  const [state, setState] = useState(initVal);

  const dispatch = (action) => {
    const newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
};
