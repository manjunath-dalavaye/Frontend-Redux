import React from 'react';
import GrandChild from './grandChild';

interface User {
  name: string;
  age: number;
  email: string;
}

interface ChildProps {
  user: User;
}

const ChildComponent: React.FC<ChildProps> = ({ user }) => {

  return (
    <div>
      <h2>I am first Child</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <GrandChild users={user} />
    </div>
  );
};

export default ChildComponent;