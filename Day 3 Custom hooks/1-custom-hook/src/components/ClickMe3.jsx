import React from 'react'
import { useThrottle } from '../hooks/useThrottle';

const ClickMe3 = () => {
    const handleClick = () => {
        console.log("Made network request");
      };
      const throttle = useThrottle(handleClick,1500)
  return (
    <div>
      <button onClick={throttle}>ClickMe3</button>
    </div>
  )
}

export default ClickMe3
