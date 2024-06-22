import React, { useState } from 'react'

function Toggle() {
    const[hide, Sethide] = useState(false)
    function handleToggle(){
        Sethide(!hide)
    }
  return (
    <div>
        <button onClick={handleToggle}>Show/Hide Text</button>
        {hide && 
            <p>show or hide</p>
        }
    </div>
  )
}

export default Toggle