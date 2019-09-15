import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

// TODO:
// 1. Create 2 contexts - name and age
// 2. Pass it to appropriate components

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
