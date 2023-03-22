import { useState } from "react";

const useToggleItems = (initialVal, iniIndex = 0) => {
  const [currIndex, setCurrIndex] = useState(iniIndex);

  const toggleState = () => {
    setCurrIndex((currIndex + 1) % initialVal.length);
  };

  return [initialVal[currIndex], toggleState];
};

export { useToggleItems };
