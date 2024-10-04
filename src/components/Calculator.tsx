import { useState } from "react";

const Calculator: React.FC = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const exp = ["+", "-", "*", "/","**"];

  const [input, setInput] = useState("");

  const handleClick = (item: string | number) => {
    setInput(input + item);
  };

  const handleCalculate = () => {
    const calculated = eval(input);
    setInput(calculated);
  };

  const handleClear = () => {
    setInput("");
  };
  return (
    <>
      <input type="text" value={input} />
      <br />
      {numbers.map((item) => {
        return <button onClick={() => handleClick(item)}>{item}</button>;
      })}
      <br />
      {exp.map((item) => {
        return <button onClick={() => handleClick(item)}>{item}</button>;
      })}
      <br />
      <button onClick={handleCalculate}>=</button>
      <button onClick={handleClear}>C</button>
    </>
  );
};
export default Calculator;
