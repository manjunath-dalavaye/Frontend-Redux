import { useDispatch, useSelector } from 'react-redux';
import {DispatchState,RootState} from '../store';
import { decrement, increment } from './counterSlice';


const Counter=()=>{

    
    const count=useSelector((state:RootState) => state.counter.value) //counter from store //Initialy we dont know the type of the state so we get it from the rootState
    const dispatch=useDispatch<DispatchState>();

    return (
        <>
        <h2>Count:{count}</h2>
        <button 
        onClick={()=>{
            dispatch(increment());
            }}>Increment</button>
    
        <button
        onClick={()=>{
            dispatch(decrement());
            }}>Decrement</button>
        </>
    )
}

export default Counter;