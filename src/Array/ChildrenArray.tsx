import React from "react";

interface ChildProps{
    name: string,
    age: number,
    mail: string,
}

interface child{
    children:ChildProps[];
}


const ChildrenArray: React.FC<child>=({children})=>{
    return(
        <div>
            <h1>Child component</h1>
             {
                children.map((childe, index) => (
                    <div key={index}>
                        <h2>{childe.name}</h2>
                        <p>{childe.age} years old</p>:<br/>
                    </div>
                ))
            }
        </div>
    )

}

export default ChildrenArray;