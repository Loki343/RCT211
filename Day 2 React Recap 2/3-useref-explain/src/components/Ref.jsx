import React, { useEffect, useRef } from "react";

const Ref = () => {
  const ref = useRef(1);
  console.log(ref);

    useEffect(()=>{
        console.log()
        ref.current.focus()
    },[])

//   const addHandler = () => {
//     ref.current++;
//     console.log(ref);
//   };

  return (
    <div>
      {/* <h1>Counter:{ref.current}</h1>
      <button onClick={addHandler}>Add</button> */}
      <input type="text" ref={ref} />
    </div>
  );
};

export default Ref;
