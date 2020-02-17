import { combineReducers } from 'redux'
import CounterReducer from './counterReducer'

const Reducer = combineReducers({
    totalProducts:CounterReducer
})

export default Reducer