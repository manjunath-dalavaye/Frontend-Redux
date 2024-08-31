import React from 'react';

interface ChildComponentAProps {
  text: string;
}

const ChildComponentA: React.FC<ChildComponentAProps> = ({ text }) => {
  return <p>{text}</p>;
}

export default ChildComponentA;
