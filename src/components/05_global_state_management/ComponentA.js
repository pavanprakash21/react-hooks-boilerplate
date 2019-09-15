import React from "react";

// TODO: Consume the context and use accordingly
const ComponentA = () => {
  return (
    <div>
      <h2>Component A - Value - {/** code here */}</h2>
      <button onClick={/** code here */}>
        Increment
      </button>
      <button onClick={/** code here */}>
        Decrement
      </button>
      <button onClick={/** code here */}>Reset</button>
    </div>
  );
};

export default ComponentA;
