import {createSlice} from '@reduxjs/toolkit'


interface ConterState {
    value: number;
}

const initialState:ConterState={value:0}

const ConterSlice = createSlice({
    name:"CounterSlice",
    initialState,
    reducers:{
        increment:(dot)=>{
            dot.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
    }
})

export const {increment,decrement} = ConterSlice.actions;
export default ConterSlice.reducer;














