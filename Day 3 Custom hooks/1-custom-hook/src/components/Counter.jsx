import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={()=> setCount(prev=> prev+1)}>Add</button>
    </div>
  )
}

export default Counter
