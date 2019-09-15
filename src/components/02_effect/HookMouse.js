import React, { useState, useEffect } from "react";

// TODO: Render mouse position on the screen and update when it is moved accordingly
// Demonstrate dependencies
function HookMouse() {
  const [name, setName] = useState("Look ma! I can change the title");

  const updateName = e => {
    console.log("updating name");
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("updating title");
    document.title = `Hello ${name}`;
  });

  return (
    <>
      <h3>
        X position: {x} - Y position: {y}
      </h3>
      <input type="text" value={name} onChange={updateName} />
    </>
  );
}

export default HookMouse;
