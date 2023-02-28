import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // console.log("Component re-rendering");

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log("inside useEffect");
  //   }, 1000);
  //   return ()=>{
  //     clearInterval(id)
  //   }
  // },[count]);

  console.log("A");

  useEffect(()=>{
    console.log("1");
    return ()=>{
      console.log("2");//this return value will come when we unmount the component
    }
  },[count])

  useEffect(()=>{
    console.log("3");
    return ()=>{
      console.log("4");
    }
  },[count])

  useEffect(()=>{
    console.log("5");
    return ()=>{
      console.log("6");
    }
  },[count])

  console.log("B");

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
