import React, {useEffect} from 'react';
import './App.css';
import {Event} from './event.js';
import {Login} from './login.js';
import {useSelector, useDispatch} from 'react-redux';
import {loadEvents} from './actions';

function App() {

  const events = useSelector(state => state.events);
  const dispatch = useDispatch(); //gets handle on dispatch fxn

  useEffect(() => {
    dispatch(loadEvents([
      {id: 1, event_name: "Backyard BBQ", month: 7, day: 23, year: 2020, start_time: "4pm", end_time: "8pm"},
      {id: 2, event_name: "Diane's birthday", month: 7, day: 11, year: 2020, start_time: "6pm", end_time: "10pm"},
      {id: 3, event_name: "School shopping", month: 8, day: 29, year: 2020, start_time: "1pm", end_time: "3:30pm"}
    ]));
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
