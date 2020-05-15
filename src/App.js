import React, {useEffect} from 'react';
import './App.css';
import {Event} from './event.js';
import {Login} from './login.js';
import {useSelector, useDispatch} from 'react-redux';
import {loadMonth} from './actions';

function App() {

  const events = useSelector(state => state.events);
  const dispatch = useDispatch(); //gets handle on dispatch fxn

  useEffect(() => {
    dispatch(loadMonth(7, 2020));
}, [dispatch]); //no real dependencies so events only run once when app renders (redux2)

  return (
    <div id="hangout-root">
      <div className="hangout-title">Hangout</div>
      <Login />
        {events.map(event => <Event key={event.id} event={event} />)}
    </div>
  );
}

export default App;
