import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../../store/counter'

import styles from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <div className={styles.counter}>
    <h1>{counter}</h1>
    {show && <div className={styles['action-buttons']}>
    <button onClick={incrementHandler}>Increment</button>
    <button onClick={decrementHandler}>Decrement</button>
    <button onClick={increaseHandler}>Increase by 5</button>
    </div>}
    <button onClick={toggleCounterHandler}>Toggle buttons</button>
    </div>
  )
}

export default Counter