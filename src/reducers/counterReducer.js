const CounterReducer = (state = 0, action) => {
    switch(action){
        case action.type === 'MILK' && action.operation ==='INCREMENT':
            return state + 10
        case action.type === 'MILK' && action.operation ==='DECREMENT' && state >= 10:
                return state - 10
        case action.type === 'BANANA' && action.operation ==='INCREMENT':
            return state + 5
        case action.type === 'BANANA' && action.operation ==='DECREMENT' && state >= 5:
            return state - 5
        case action.type === 'CHEESE' && action.operation ==='INCREMENT':
            return state + 20
        case action.type === 'CHEESE' && action.operation ==='DECREMENT' && state >= 20:
            return state - 20
        default:
            return state
    }
}
export default CounterReducer