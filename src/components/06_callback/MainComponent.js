import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

// TODO:
// 1. As a refresher, use useState and make this component work
// 2. Understand React.memo
// 3 Understand the signature of useCallback
const MainComponent = () => {
  const [age, setAge] = useState(28);

  const incrementAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="height" count={height} />
      <Button handleClick={incrementHeight}>Increment height</Button>
    </div>
  );
};

export default MainComponent;
