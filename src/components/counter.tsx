import React, { useState } from 'react';
import '../styles/main.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const maxCount = 10;

  const increment = () => {
    if (count < maxCount) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`counter-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="counter-value">{count}</div>
      <button onClick={increment} className={count >= maxCount ? 'disabled' : ''}>
        Increment
      </button>
      <button onClick={decrement} disabled={count <= 0}>
        Decrement
      </button>
      <div className={`warning-message ${count >= maxCount ? 'visible' : ''}`}>
        Warning: Maximum count reached!
      </div>
      <button 
        onClick={toggleDarkMode} 
        className={`dark-mode-toggle ${darkMode ? 'dark-mode' : ''}`}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Counter;
