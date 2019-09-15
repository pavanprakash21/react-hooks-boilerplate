import React, { useState } from "react";
import HookMousePosition from "./HookMousePosition";

function MousePositions() {
  const [showPosition, setShowPosition] = useState(true);

  const toggleMouseEvent = () => {
    setShowPosition(!showPosition);
  };

  return (
    <>
      {showPosition && <HookMousePosition />}
      <button type="button" onClick={toggleMouseEvent}>
        {showPosition ? "Hide " : "Show "} Values
      </button>
    </>
  );
}

export default MousePositions;
