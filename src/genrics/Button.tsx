import React, { ReactNode } from "react";

interface props{
    children: ReactNode;
    onClick:()=>void;
    style:React.CSSProperties
}
const Button:React.FC<props> = ({style, children,onClick}) =>{
    return(
        <>
        <button style={style} onClick={onClick}>{children}</button></>
    )
}
export default Button;