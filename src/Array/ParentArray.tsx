import React from "react";
import ChildrenArray from "./ChildrenArray";

const Parentarray: React.FC = () => {

    const parentData=[{
        name:"manjunath",
        age:22,
        mail:"manjunath@gmail.com"
    }]

  return(

<>
    <h2>Parent Details</h2>
    <ChildrenArray children={parentData} />
    </>
  )

}

export default Parentarray;
