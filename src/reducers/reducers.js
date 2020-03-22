import { combineReducers } from 'redux'
import CounterReducer from './counterReducer'

const Reducer = combineReducers({
    reducer:CounterReducer
})

export default Reducer