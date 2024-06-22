import React, { useState } from 'react'

function Textarea() {
  const[countText, SetCountText] = useState("")
  function handleCount(e){
    // countText(e.target.value)
    SetCountText(e.target.value)
  }

  return (
    <div>
        <div>
            <textarea onChange={handleCount}/>
            <p>Character count: {countText.length}</p>
        </div>
    </div>
  )
}

export default Textarea