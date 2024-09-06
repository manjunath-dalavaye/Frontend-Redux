import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { increment, decrement } from "./redux/actions";

  const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();
  //dispatch is used to update the state
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count:{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
