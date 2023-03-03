import React, { useEffect, useState } from 'react'

const Timer1 = () => {
    const [show,setShow] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setShow(!show)
        }, 2000);
    },[])
  return (
    <div>
      {show && <h2>This is Timer 1 (2sec)</h2>}
    </div>
  )
}

export default Timer1
