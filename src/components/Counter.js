import { useState } from 'react';
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

  const [increaseValue, setIncreaseValue] = useState(0);

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({type : 'increment'});
  }
  const decrementHandler = () => {
    dispatch({type : 'decrement'});
  }

  const increaseHandler = (val) => {
    dispatch({type : 'increase', value: parseInt(val)})
  }
  
  function handleIncreaseValue(event){
    if(event.target.value <= 9){
      setIncreaseValue(event.target.value);
    }else{
      event.target.value = 0;
    }
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggleCounter'});
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
