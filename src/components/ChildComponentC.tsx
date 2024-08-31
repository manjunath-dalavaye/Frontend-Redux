import React from "react";

interface ChildComponentCProps{
    text:string;
}

const ChildComponentC: React.FC<ChildComponentCProps> = ({ text }) => {
    return <p>{text}</p>;
  }

  export default ChildComponentC;