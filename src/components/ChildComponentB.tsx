import React from 'react';

interface ChildComponentBProps {
  text: string;
}

const ChildComponentB: React.FC<ChildComponentBProps> = ({ text }) => {
  return <p>{text}</p>;
}

export default ChildComponentB;
