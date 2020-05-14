import React from 'react';
import './App.css';
import './event.css';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function Event(props) {
    const event = props.event;

    return (
        <div className="event">
             <span className="date">{months[event.month - 1]} {event.day}</span>
             <div className="name">{event.event_name}</div> 
        </div>
    );
}