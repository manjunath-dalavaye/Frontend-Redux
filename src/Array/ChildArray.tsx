import React from "react";
import GrandChildArray from "./GrandchildArray";

interface Children{
    EmployeeID: number,
    EmployeeName:string,
    EmployeeAge:number,
    EmployeeDesignation:string
}

interface Child{
    child2:Children[],
}

const ChildArray: React.FC<Child>=({child2})=>{

return(
    <>
    <h2>Child components</h2>
    {
        child2.map((item)=>(
            <div key={item.EmployeeID}>
                <p>{item.EmployeeID}</p>
                <p>{item.EmployeeName}</p>
                <p>{item.EmployeeAge}</p>
                <p>{item.EmployeeDesignation}</p>
            </div>
        ))
}
    <GrandChildArray grand3={child2} />
    </>
)

}

export default ChildArray;