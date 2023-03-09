import React, { useState } from "react";
import { addAction, reduceAction } from "../redux/action";
import { store } from "../redux/store";

const Counter = () => {
  const [render, setRender] = useState(0);
  console.log(store);
  const { getState, dispatch, subscribe } = store;
  console.log(getState());

  subscribe(() => {
    setRender((prev) => prev + 1);
  });

  const addHandler = () => {
    dispatch(addAction(5));
  };

  const reduceHandler = () => {
    dispatch(reduceAction());
  };

  return (
    <div>
      <h1>Counter: {getState().counter}</h1>
      <button onClick={addHandler}>Add</button>
      <button onClick={reduceHandler}>Reduce</button>
    </div>
  );
};

export default Counter;
