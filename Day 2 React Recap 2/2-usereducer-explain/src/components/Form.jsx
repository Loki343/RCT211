import React, { useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL": {
      return { ...state, email: payload };
    }
    case "PASSWORD": {
      return { ...state, password: payload };
    }
    case "RESET": {
      return initialState;
    }
    default:
      return state;
  }
};

const initialState = {
  email: "",
  password: "",
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => {
              dispatch({ type: "EMAIL", payload: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) => {
              dispatch({ type: "PASSWORD", payload: e.target.value });
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
