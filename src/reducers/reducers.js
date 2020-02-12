import { combineReducers } from 'redux'
import CounterReducer from './counterReducer'

const Reducer = combineReducers({
    counter:CounterReducer
})

export default Reducer