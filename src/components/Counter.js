import { useState } from 'react';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter'
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

  const [increaseValue, setIncreaseValue] = useState(0);

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const increaseHandler = (val) => {
    dispatch(counterActions.increase(parseInt(val)));
  }
  
  function handleIncreaseValue(event){
    if(event.target.value <= 9){
      setIncreaseValue(event.target.value);
    }else{
      event.target.value = 0;
    }
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter ? 
        <div className={classes.value}>{counter}</div> : 
        <div className={classes.value}>-- COUNTER --</div>
      }
      <div className='counter-button' >
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <div>
        <input type="number" name='val' id='val' maxLength={9} onChange={handleIncreaseValue}/>
        <button onClick={() => increaseHandler(increaseValue)}>increase by {increaseValue}</button>
      </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
