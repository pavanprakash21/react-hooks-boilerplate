import React, { createContext, useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

// TODO:
// 1. Create a count context
// 2. Have a way to handle that counter and update the value
// 3. Key is to think in terms of syncing the state of the component with the outside world

const MainComponent = () => {
  return (
    <div>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
};

export default MainComponent;
