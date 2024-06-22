import React, { useState } from "react";
// import "./styles.css";
/*
Instructions:
  Can't remove the buttons when clicked , See if you can debug and fix 
*/

function Parent() {
  const [children, setChildren] = useState([3, 1, 2]);

  function removeChild(removedId) {
    setChildren(children.filter((id) => id !== removedId));
  }
  return (
    <div>
      <h2> Hi there.... </h2>
      {children.map((id, jj) => (
        <Child key={jj} id={id} remove={()=>removeChild(id)} />
      ))}
    </div>
  );
}

function Child({ remove, id }) {
  return (
    <div>
      <button onClick={remove}>I'm the child {id}. Click to remove me!</button>
    </div>
  );
}

export default function Debug() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}
