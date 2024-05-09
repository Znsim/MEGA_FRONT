// BearsComponent.js
import React from "react";
import useStore from "../store/useStore";

function BearsComponent() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);

  return (
    <div>
      <h1>{bears} bears</h1>
      <button onClick={increasePopulation}>One up</button>
      <button onClick={removeAllBears}>Remove all</button>
    </div>
  );
}

export default BearsComponent;

// export function BearCounter() {
//   const bears = useStore((state) => state.bears);
//   return <h1>{bears} around here...</h1>;
// }

// export function Controls() {
//   const increasePopulation = useStore((state) => state.increasePopulation);
//   return <button onClick={increasePopulation}>one up</button>;
// }
