import React from 'react';
import './App.css';
import './event.css';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function Event(props) {
    const event = props.event;

    return (
        <div className="event">
             <span className="month">{months[event.month - 1]}</span> 
             <span className="day">{event.day}</span>
        </div>
    );
}