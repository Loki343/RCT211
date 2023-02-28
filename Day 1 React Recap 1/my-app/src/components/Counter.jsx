import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("inside useEffect");
  });

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleReduce = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleReduce}>Reduce</button>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Counter;
