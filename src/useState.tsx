import React, { useState } from 'react'

const UseStated: React.FC=()=>{
//simple state
    const [currentValue,setFunction]=useState(0);
    console.log("useState is called",currentValue);
    const HandleClick = () => {
            setFunction(10)
        }
//State by using the object

        const [position,setPosition]=useState({x:1,y:5})
        console.log("useState is called",position);
        const ButtonClick = () => {
            setPosition({x:10,y:20})
        }

  return (
    <>
    <h2>Number : {currentValue}</h2>
    <button onClick={HandleClick}>change number</button>

    {/* Button for object */}
    <h3>position value:{position.x}{ position.y}</h3>
    <button onClick={ButtonClick}>Change object</button>
    </>
  )
}

export default UseStated;