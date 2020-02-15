import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addMilkAction, removeMilkAction, addBananaAction, removeBananaAction, addCheeseAction, removeCheeseAction } from './actions/actions'

const App = () => {
  const counter = useSelector(state => state.counter)
  let dispatch = useDispatch()
  return (
    <div>
      <div className="product-block">
        <p>Milk 10$</p>
        <button className="ui green button" onClick={()=>{dispatch(addMilkAction())}}>+</button>
        <button className="ui red button" onClick={()=>{dispatch(removeMilkAction())}}>-</button>
      </div>
      <div className="product-block">
        <p>Banana 5$</p>
        <button className="ui green button" onClick={()=>{dispatch(addBananaAction())}}>+</button>
        <button className="ui red button" onClick={()=>{dispatch(removeBananaAction())}}>-</button>
      </div>
      <div className="product-block">
        <p>Cheese 20$</p>
        <button className="ui green button" onClick={()=>{dispatch(addCheeseAction())}}>+</button>
        <button className="ui red button" onClick={()=>{dispatch(removeCheeseAction())}}>-</button>
      </div>
      <div>
        <p id="total">Total: <span>${counter}</span></p>
      </div>
    </div>
  );
}

export default App;
