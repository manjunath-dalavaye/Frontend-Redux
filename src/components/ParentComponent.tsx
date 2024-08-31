import React from 'react';
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';
import ChildComponentC from './ChildComponentC'

const ParentComponent: React.FC = () => {
  const messageA: string = "Developer";
  const messageB: string = "Email-Manjunath.s@gmail.com";
  const messageC: string = "GEC College , Davanagere";

  return (
    <div>
      <h1>Manjunath S </h1>
      <ChildComponentA text={messageA} />
      <ChildComponentB text={messageB} />
      <ChildComponentC text={messageC} />
    </div>
  );
}

export default ParentComponent;
