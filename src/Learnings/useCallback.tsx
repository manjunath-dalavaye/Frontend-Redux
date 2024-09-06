import React, { useState, useCallback } from 'react';

const Button = React.memo(({ handleClick }) => {
  console.log('Button rendered');
  return <button onClick={handleClick}>Click me</button>;
});

const UseCall = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // No dependencies, so the function is memoized and won't change

  return (
    <div>
      <p>Count: {count}</p>
      <Button handleClick={handleClick} />
    </div>
  );
};

export default UseCall;
