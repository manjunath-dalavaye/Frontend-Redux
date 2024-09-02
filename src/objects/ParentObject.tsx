import React from "react";
import ChildObject from "./ChildObject";

const ParentObject: React.FC = () => {
    const EmployeeDetails={
        EmployeeID:1,
        EmployeeName:"John Doe",
        EmployeeAge:30,
        EmployeeDesignation:"software developer"
    }

 return (
    <div>
        <h2>I am from Parent components</h2>
        <ChildObject  child={EmployeeDetails}/>

    </div>
  );

}
 export default ParentObject;