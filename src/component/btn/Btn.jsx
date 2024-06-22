import React, { useState } from 'react'

function Btn() {
    const[show, SetShow] = useState("")
    function handleshow(){
        SetShow(!show)
    }
  return (
<div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
    <button onClick={handleshow}>hide/show</button>
    {show && 
    <p>hello world</p>
    }

  </div>
  )
}

export default Btn