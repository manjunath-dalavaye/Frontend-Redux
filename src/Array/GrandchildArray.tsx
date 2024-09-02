import React from "react";

interface grand{
    EmployeeID: number,
    EmployeeName:string,
    EmployeeAge:number,
    EmployeeDesignation:string
}

interface grand2{
    grand3: grand[],
}


const GrandChildArray: React.FC<grand2>= ({grand3}) => {
return(
  <>
        <h1>Grand child</h1>
     {
        grand3.map((items)=>(
            <div key={items.EmployeeID}>
                <p>{items.EmployeeID}</p>
                <p>{items.EmployeeName}</p>
                <p>{items.EmployeeAge}</p>
                <p>{items.EmployeeDesignation}</p>
            </div>
        ))
     }
  
  </>

)


}

export default GrandChildArray;