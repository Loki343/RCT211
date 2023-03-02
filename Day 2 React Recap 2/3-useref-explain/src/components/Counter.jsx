import React, { useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD": {
      return { ...state, counter: state.counter + payload };
    }
    case "REDUCE": {
      return { ...state, counter: state.counter - payload };
    }
    default:
      return state;
  }
};

const initialState = {
  counter: 0,
  timer: 0,
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addHandler = () => {
    dispatch({ type: "ADD", payload: 1 });
    console.log(state)
  };

  const reduceHandler = () => {
    dispatch({ type: "REDUCE", payload: 1 });
  };

  return (
    <div>
      <h1>Counter : {state.counter}</h1>
      <button disabled={state.counter === 10} onClick={addHandler}>
        Add
      </button>
      <button disabled={state.counter === 0} onClick={reduceHandler}>
        Reduce
      </button>
    </div>
  );
};

export default Counter;

// Note
//1. after each dispatch you get a new object and here after first time state=1 so we have to combine old state so we have to spread it
//2. with this spread operator we should change only the value we want after spreading
