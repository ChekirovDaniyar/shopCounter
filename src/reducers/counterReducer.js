const CounterReducer = (state = 0, action) => {
    switch(action){
        case this.type.name === 'MILK' && this.type.operation ==='INCREMENT':
            return state + 10
        case this.type.name === 'MILK' && this.type.operation ==='DECREMENT' && state >= 10:
                return state - 10
        case this.type.name === 'BANANA' && this.type.operation ==='INCREMENT':
            return state + 5
        case this.type.name === 'BANANA' && this.type.operation ==='DECREMENT' && state >= 5:
            return state - 5
        case this.type.name === 'CHEESE' && this.type.operation ==='INCREMENT':
            return state + 20
        case this.type.name === 'CHEESE' && this.AbortSignaltype.operation ==='DECREMENT' && state >= 20:
            return state - 20
        default:
            return state
    }
}
export default CounterReducer