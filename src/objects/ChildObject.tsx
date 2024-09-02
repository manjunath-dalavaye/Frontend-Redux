import React from "react";

interface Details{
    EmployeeID: number,
    EmployeeName:string,
    EmployeeAge:number,
    EmployeeDesignation:string
}

interface childrenData{
    child:Details
}

const ChildObject: React.FC<childrenData> =({child})=>{
    return (
        <div>
            <h1>Employee Details (I am from child bro)</h1><br/>
            <p>Employee ID: {child.EmployeeID}</p><br/>
            <p>Employee Name: {child.EmployeeName}</p><br/>
            <p>Employee Age: {child.EmployeeAge}</p><br/>
            <p>Employee Designation: {child.EmployeeDesignation}</p><br/>
        </div>
    );
}

export default ChildObject;