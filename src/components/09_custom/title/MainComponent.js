import React from "react";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";

// TODO: Both the components contain similar code - refactor
const MainComponent = () => {
  return (
    <div>
      <CounterOne />
      <CounterTwo />
    </div>
  );
};

export default MainComponent;
