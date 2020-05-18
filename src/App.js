import React, {useEffect} from 'react';
import './App.css';
import {Event} from './event.js';
import {Login} from './login.js';
import {useSelector, useDispatch} from 'react-redux';
import {loadMonth, startAddingEvent} from './actions';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;

function App() {
  const events = useSelector(state => state.events);
  const isWaiting = useSelector(state => state.isWaiting);
  const dispatch = useDispatch(); //gets handle on dispatch fxn

  useEffect(() => {
    dispatch(loadMonth(month, year));
  }, [dispatch]); //no real dependencies so events only run once when app renders (redux2)

  const onAdd = () => {
    dispatch(startAddingEvent(month, year)); //thunk issued
  }

  return (
    <div id="hangout-root">
      <div className="hangout-title">Hangout</div>
      <Login />
      {isWaiting && <img className="progress-indicator" src={'/public/progress.png'} />}
      <button onClick={onAdd}>Create New Event</button>
        {events.map(event => <Event key={event.id} event={event} />)}
    </div>
  );
}

export default App;
