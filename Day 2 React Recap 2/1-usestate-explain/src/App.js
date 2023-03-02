import "./App.css";
import { useState } from "react";

// const number = 0;
// const number = null;
// const number = undefined;

/*
//it is not working because a and b is not defined so it cant add with number
const sum = (a, b) => {
  return a + b;
};
*/


//it is working because a and b both initialize with 0
const sum = (a=0, b=0) => {
  return a + b;
};


function App() {
  /*
  // const [count,setCount] = useState(0)
  const state = useState(0);
  console.log(state);
  const count = state[0];
  const setCount = state[1];
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
  */
  /*
  const state = useState(number || 0);
  console.log(state);
  const count = state[0];
  const setCount = state[1];
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );*/
  const [count, setCount] = useState(sum);
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;

//just try
// console.log(undefined+1);
// console.log(null+1);

//Note
// 1. with state management we can StorageEvent,access or modify our data
//2. there is no restriction to pass any data in state
// 3. data-type
// i. primitive data-type -> string,boolean,number,undefined,null,symbol,big-int
// ii. non-primitive data-type -> object,array
// 4. we can also pass function in useState but there are some conditions
// 5. if you don't call a function inside useState it is called automatically
