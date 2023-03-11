import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, reduceAction } from './../redux/counter/action';


const Counter = () => {
  const { counter } = useSelector((store) => {
    // console.log(store);
    return store.counter;
  });
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addAction(1))
  };
  const handleReduce = () => {
    dispatch(reduceAction(1))
  };
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

export default Counter;
