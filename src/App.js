import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addMilkAction, removeMilkAction, addBananaAction, removeBananaAction, addCheeseAction, removeCheeseAction } from './actions/actions'

const App = () => {
  const counter = useSelector(state => state.counter)
  let dispatch = useDispatch()
  return (
    <div>
      <div>
        <p>Milk 10$</p>
        <button onClick={()=>{dispatch(addMilkAction())}}>+</button>
        <button onClick={()=>{dispatch(removeMilkAction())}}>-</button>
      </div>
      <div>
        <p>Banana 5$</p>
        <button onClick={()=>{dispatch(addBananaAction())}}>+</button>
        <button onClick={()=>{dispatch(removeBananaAction())}}>-</button>
      </div>
      <div>
        <p>Cheese 20$</p>
        <button onClick={()=>{dispatch(addCheeseAction())}}>+</button>
        <button onClick={()=>{dispatch(removeCheeseAction())}}>-</button>
      </div>
      <div>
        <p>Total: ${counter}</p>
      </div>
    </div>
  );
}

export default App;
