import React from "react";

const Count = ({ text, count }) => {
  console.log(`render ${text}`);
  return (
    <h4>
      {text} - {count}
    </h4>
  );
};

export default Count;
