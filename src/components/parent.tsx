import React from 'react';
import Child from './childern';


const Parent: React.FC = () => {
  const user = {
    name: "John Doe",
    age: 22,
    email: "john.doe@example.com",
  };

  return (
    <div>
      <h1>I am Parent Component</h1>
      <Child user={user} />
    </div>
  );
};

export default Parent;