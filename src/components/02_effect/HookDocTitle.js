import React, { useState } from "react";

// TODO: Update the title
function HookDocTitle() {
  const [title, setTitle] = useState("Look ma! I can change the title");

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </div>
  );
}

export default HookDocTitle;
