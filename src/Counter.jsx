
import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="buttons">
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
