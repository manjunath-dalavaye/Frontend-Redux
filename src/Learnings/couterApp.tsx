import React, { useState } from "react";

const CounterApp: React.FC = () => {

 const [counter, setcouter]=useState(0);

 const handleClick=()=> {
    setcouter(counter+1);
 }
    return(

        <div>
            <h1>Counter {counter}</h1>
            <button onClick={handleClick}></button>
        </div>
    )

}

export default CounterApp;
