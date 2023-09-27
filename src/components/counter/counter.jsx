import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1);
    
  };

  const handleDecrement = () => {
    setCount(count - 1);
    
  };

  const handleToggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className="container mt-5 text-center">
      {showText && <h4>Count: {count}</h4>}
      <button className="btn btn-primary m-2" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn btn-primary m-2" onClick={handleDecrement}>
        Decrement
      </button>
      <button
        className={`btn  ${showText ? 'btn-secondary' : 'btn-primary'}`}
        onClick={handleToggleText}
      >
        {showText ? 'Hide Text' : 'Show Text'}
      </button>
      
    </div>
  );
};

export default Counter;