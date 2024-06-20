import React, { useState } from 'react'

function Text() {
    const[update, SetUpdate] = useState("")
    function handleUpdate(e){
        e.preventDefault()
        SetUpdate(e.target.value)
    }
  return (
    <div>
        <div>
            <input onChange={handleUpdate} type="text" />
            <p>Input text: {update}</p>
        </div>
    </div>
  )
}

export default Text