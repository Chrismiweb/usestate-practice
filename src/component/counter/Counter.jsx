import React, { useState } from 'react'

function Counter() {
    const[increase, SetIncrease] = useState(0)
    function handleIncrease(){
        // SetIncrease(!increase)
        SetIncrease(increase + 1)
    }
  return (
    <div>
        <div>
            <button onClick={handleIncrease}>Increment</button>
            <p>Count: {increase}</p>
        </div>
    </div>
  )
}

export default Counter