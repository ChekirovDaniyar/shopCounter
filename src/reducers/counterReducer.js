const initialState = {
    total:0,
    banana:0,
    milk: 0,
    cheese:0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BANANA_ICNREMENT':
            return{
                ...state,
                total: state.total + action.payload,
                banana: state.banana + 1
            }
        case 'BANANA_DECREMENT':
            if (state.banana >= 1) {
                return {
                    ...state,
                    total: state.total + action.payload,
                    banana: state.banana - 1
                }
            }
            else{
                return state
            }
        case 'CHEESE_INCREMENT':
            return{
                ...state,
                total: state.total + action.payload,
                cheese: state.cheese + 1
            }
        case 'CHEESE_DECREMENT':
            if(state.cheese >= 1){
                return{
                    ...state,
                    total: state.total + action.payload,
                    cheese: state.cheese - 1
                }
            }
            else{
                return state
            }
        case 'MILK_INCREMENT':
            return{
                ...state,
                total: state.total + action.payload,
                milk: state.milk + 1
            }
        case 'MILK_DECREMENT':
            if(state.milk >= 1){
                return{
                    ...state,
                    total:state.total + action.payload,
                    milk: state.milk - 1
                }
            }
            else{
                return state
            }
        default:
            return state
    }
}
export default CounterReducer