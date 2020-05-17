import React, {useState} from 'react';
import './App.css';
import './event.css';
import { useDispatch } from 'react-redux';
import { enterEditMode, leaveEditMode } from './actions'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function Event(props) {
    const event = props.event;
    const dispatch = useDispatch();
    const [year, setYear] = useState(event.year);
    const [month, setMonth] = useState(event.month);
    const [day, setDay] = useState(event.day);
    const [event_name, setEventName] = useState(event.event_name);

    const onEdit = () => {
        dispatch(enterEditMode(event));
    }

    const onCancel = () => {
        dispatch(leaveEditMode(event));
    }
    if (event.isEditing) {
        return (
            <div className="event">
                <div className="event-left">
                    <input type="text" value={year}/>
                    <input type="text" value={month}/>
                    <input type="text" value={day}/>
                    <button>save</button>
                    <button onClick={onCancel}>cancel</button>
                </div>
                <div className="event-right">
                    <textarea value={event_name}/>
                </div>
            </div>
        );
    } else {
        return (
            <div className="event">
                <div className="event-left">
                    <span className="date">{months[event.month - 1]} {event.day}</span>
                    <button onClick={onEdit}>edit</button>
                </div>
                <div className="event-right">
                    {event.event_name} ({event.start_time}-{event.end_time})
                </div>
            </div>
        );
    }
}