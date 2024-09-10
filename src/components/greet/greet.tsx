type GreetProps={
    name?:string
}


const Greet=(props:GreetProps)=>{
    return (
        <div>hello, Development{props.name}</div>
    )
}

export default Greet;