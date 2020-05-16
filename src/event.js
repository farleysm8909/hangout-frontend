import React from 'react';
import './App.css';
import './event.css';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function Event(props) {
    const event = props.event;

    return (
        <div className="event">
             <div className="date">{months[event.month - 1]} {event.day}</div>
             <div className="desc">{event.event_name} ({event.start_time}-{event.end_time})</div>
        </div>
    );
}