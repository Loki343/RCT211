import React from 'react'
import { useTimer } from '../hooks/useTimer'

const Timer2 = () => {
    const show = useTimer(3000)
  return (
    <div>
      {show && <h2>This is Timer 2 (3sec)</h2>}
    </div>
  )
}

export default Timer2
