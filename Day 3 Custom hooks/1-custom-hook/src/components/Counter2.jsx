import React from "react";
import { useCounterLogic } from "../hooks/useCounterLogic";

const Counter2 = () => {
  const [state, setterFn] = useCounterLogic(0, 2);
  return (
    <div>
      <h2>Counter : {state}</h2>
      <button onClick={setterFn}>Add</button>
    </div>
  );
};

export default Counter2;
