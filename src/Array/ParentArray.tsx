import React from "react";
import ChildArray from "./ChildArray";

const ParentArray: React.FC = () => {
    const EmployeeDetails=[{
        EmployeeID:1,
        EmployeeName:"John Doe",
        EmployeeAge:30,
        EmployeeDesignation:"software developer"
    },
    {
        EmployeeID:1,
        EmployeeName:"John Doe",
        EmployeeAge:30,
        EmployeeDesignation:"software developer"
    },
    {
        EmployeeID:1,
        EmployeeName:"John Doe",
        EmployeeAge:30,
        EmployeeDesignation:"software developer"
    }
]


    return (
        <>
        <h3>Parent component from Array</h3>
        <ChildArray child2={EmployeeDetails} />
        </>
    
    )
}

export default ParentArray;
