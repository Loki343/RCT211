import  { useState } from "react";

export const useCounterLogic = (initVal, payload) => {
  const [state, setState] = useState(initVal);

  let fun = ()=>{
    setState ((prev) => prev + payload)
  }

  return [state,fun]
};
