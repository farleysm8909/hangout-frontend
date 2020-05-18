import React, {useState} from 'react';
import './App.css';
import './event.css';
import { useDispatch } from 'react-redux';
import { enterEditMode, leaveEditMode, startSavingEvent, startDeletingEvent } from './actions'

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

    const onSave = () => {
        dispatch(startSavingEvent(event));
        id: event.id,
        year,
        month,
        day,
        event_name
    }

    const onDelete = () => {
        dispatch(startDeletingEvent(event));
    }

    if (event.isEditing) {
        return (
            <div className="event">
                <div className="event-left">
                    <input type="text" value={year} onChange={e => setYear(parseInt(e.target.value))}/>
                    <input type="text" value={month} onChange={e => setMonth(parseInt(e.target.value))}/>
                    <input type="text" value={day} onChange={e => setDay(parseInt(e.target.value))}/>
                    <button onClick={onSave}>save</button>
                    <button onClick={onCancel}>cancel</button>
                    <button className="delete-button" onClick={onDelete}>delete</button>
                </div>
                <div className="event-right">
                    <textarea value={event_name} onChange={e => setEventName(e.target.value)}/>
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