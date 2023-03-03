import React from "react";
import { useDebounce } from "../hooks/useDebounce";

const ClickMe2 = () => {
  const handleClick = () => {
    console.log("Made network request");
  };
  const debounce = useDebounce(handleClick, 1500);

  return (
    <div>
      <button onClick={debounce}>Click Me2</button>
    </div>
  );
};

export default ClickMe2;
