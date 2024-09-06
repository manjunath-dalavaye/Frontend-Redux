interface CounterState{
    count: number;
}

const initialState: CounterState = {
    count: 0,
};

type Action =
|{type:'INCREMENT'}
|{type:'DECREMENT'};

const counterReducer = (state = initialState, action: Action): CounterState => {
    switch (action.type){
        case 'INCREMENT':
            return { ...state, 
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {...state,
                 count: state.count-1,
    };
    default:
        return state;
    }
};

export default counterReducer;
