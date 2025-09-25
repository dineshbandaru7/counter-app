import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  function handlePlus() {
    setCount(count + 1);
  }
  function handleminus() {
    setCount(count - 1);
  }
  function handleZero() {
    setCount((count = 0));
  }

  return (
    <div className="numCounter">
      <h1>counter app</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleminus}>-</button>
        <button onClick={handleZero}>0</button>
      </div>
    </div>
  );
};

export default Counter;
