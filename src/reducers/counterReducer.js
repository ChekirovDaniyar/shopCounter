const CounterReducer = (state = 0, action) => {
    switch(action.type){
        case 'BANANA_ICNREMENT':
            return state + action.payload
        case 'BANANA_DECREMENT':
                return state + action.payload
        case 'CHEESE_INCREMENT':
            return state + action.payload
        case 'CHEESE_DECREMENT':
            return state + action.payload
        case 'MILK_INCREMENT':
            return state + action.payload
        case 'MILK_DECREMENT':
            return state + action.payload
        default:
            return state
    }
}
export default CounterReducer