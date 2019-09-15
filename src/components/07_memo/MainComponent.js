import React, { useState, useMemo } from "react";

// TODO:
// 1. Make isEven slow and see how it affects other components
// 2. Make it not affect the other parts
const MainComponent = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(countOne + 1);
  };

  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = () => {
    return countOne % 2 === 0;
  };

  const isPrime = () => {
    for (let i = 2; i < countTwo; i++) if (countTwo % i === 0) return false;
    return countTwo > 1;
  };

  return (
    <>
      <>
        <button onClick={incrementOne}>Button one - {countOne}</button>
        {isEven ? "Even" : "Odd"}
      </>
      <>
        <button onClick={incrementTwo}>Button one - {countTwo}</button>
        {isPrime ? "Prime" : "Non-prime"}
      </>
    </>
  );
};

export default MainComponent;
