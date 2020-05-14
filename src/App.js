import React from 'react';
import './App.css';
import {Event} from './event.js';
import {Login} from './login.js';
import {useSelector} from 'react-redux';

function App() {

  const events = useSelector(state => state.events);

  return (
    <div id="hangout-root">
      <div className="hangout-title">Hangout</div>
      <Login />
        {events.map(event => <Event event={event} />)}
    </div>
  );
}

export default App;
