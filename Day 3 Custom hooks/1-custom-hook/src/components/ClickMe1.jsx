import React, { useRef } from "react";

const ClickMe1 = () => {

  let {current: id} = useRef()
  const debounce = (func, delay) => {
    id && clearTimeout(id)
    id = setTimeout(() => {
        func()
    }, delay);
  };
  const handleClick = () => {
    console.log("Made network request");
  };
  return (
    <div>
      <button onClick={()=>debounce(handleClick,1500)}>Click Me1</button>
    </div>
  );
};

export default ClickMe1;
