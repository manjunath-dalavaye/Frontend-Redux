import { useDispatch, useSelector } from 'react-redux';
import {DispatchState,RootState} from '../store';
import { decrement, increment } from './counterSlice';


const Counter=()=>{
    const count=useSelector((state:RootState) => state.counter.value)
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