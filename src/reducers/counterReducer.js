const CounterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'BANANA_ICNREMENT':
            if (state + action.payload <= 0) {
                return 0
            }
            return state + action.payload
        case 'BANANA_DECREMENT':
            if (state + action.payload <= 0) {
                return 0
            }
            return state + action.payload
        case 'CHEESE_INCREMENT':
            if (state + action.payload <= 0) {
                return 0
            }
            return state + action.payload
        case 'CHEESE_DECREMENT':
            if (state + action.payload <= 0) {
                return 0
            }
            return state + action.payload
        case 'MILK_INCREMENT':
            if (state + action.payload <= 0) {
                return 0
            }
            return state + action.payload
        case 'MILK_DECREMENT':
            if (state + action.payload <= 0) {
                return 0
            }
            return state + action.payload
        default:
            return state
    }
}
export default CounterReducer