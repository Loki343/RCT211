import React from "react";
import { useMyReducer } from "../hooks/useMyReducer";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "add": {
      return { ...state, counter: state.counter + payload };
    }

    default:
      return state;
  }
};

const initialState = {
  counter: 0,
  todos: [],
  email: "",
  password: "",
};

const Form = () => {
  const [data, dispatch] = useMyReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter : {data.counter}</h2>
      <button onClick={() => dispatch({ type: "add", payload: 1 })}>Add</button>
    </div>
  );
};

export default Form;
