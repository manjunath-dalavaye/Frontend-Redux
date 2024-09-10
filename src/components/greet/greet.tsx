import {GreetProps} from './greet.types'


const Greet=(props:GreetProps)=>{
    return (
        <div>hello, Development{props.name ? props.name : "Guest"}</div>
    )
}

export default Greet;