export const Action = Object.freeze({
    LoadEvents: 'LoadEvents',
    FinishAddingEvent: 'FinishAddingEvent',
    EnterEditMode: 'EnterEditMode',
    LeaveEditMode: 'LeaveEditMode',
    StartSavingEvent: 'StartSavingEvent',
    FinishSavingEvent: 'FinishSavingEvent',
    FinishDeletingEvent: 'FinishDeletingEvent',
    StartWaiting: 'StartWaiting',
});

export function startWaiting() {
    return {
        type: Action.StartWaiting,
    };
}

export function loadEvents(events) {
    return {
        type: Action.LoadEvents,
        payload: events,
    };
}

export function finishAddingEvent(event) {
    return {
        type: Action.FinishAddingEvent,
        payload: event,
    };
}

export function finishSavingEvent(event) {
    return {
        type: Action.FinishSavingEvent,
        payload: event,
    };
}

export function finishDeletingEvent(event) {
    return {
        type: Action.FinishDeletingEvent,
        payload: event,
    };
}

export function enterEditMode(event) {
    return {
        type: Action.EnterEditMode,
        payload: event,
    };
}

export function leaveEditMode(event) {
    return {
        type: Action.LeaveEditMode,
        payload: event,
    }
}

function checkForErrors(response) {
    if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}

const host = 'https://hangout-api.duckdns.org:8442';

//this function does not return an action object (with keys type and payload) like a true action creator
//it returns a fxn, and in order to allow this, we have to install thunk plugin
export function loadMonth(month, year) {
    return dispatch => {
        dispatch(startWaiting());
        fetch(`${host}/hangout/${month}/${year}`)   //note: used "hangout" instead of "events" in web service/URL creation    
        .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(loadEvents(data.hangout));
                }
            })
            .catch(e => console.error(e));
    };
}

export function startAddingEvent(month, year) { //note: month/year will correspond to whatever month/year user accesses app
    const event = { 
        event_name: '', month, day: '', year, start_time: '', end_time: '' //add users attending?         
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
    }

    return dispatch => {
        dispatch(startWaiting());
        fetch(`${host}/hangout`, options)
            .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    event.id = data.id;                 //update event object to have new database id
                    dispatch(finishAddingEvent(event)); //update store
                }
            })
            .catch(e => console.error(e));
    };
}
export function startSavingEvent(event) { //note: month/year will correspond to whatever month/year user accesses app
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
    }

    return dispatch => {
        dispatch(startWaiting());
        fetch(`${host}/hangout/${event.id}`, options)
            .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {                //update event object to have new database id
                    dispatch(finishSavingEvent(event)); //update store
                }
            })
            .catch(e => console.error(e));
    };
}

export function startDeletingEvent(event) { //note: month/year will correspond to whatever month/year user accesses app
    const options = {
        method: 'DELETE',
    };

    return dispatch => {
        dispatch(startWaiting());
        fetch(`${host}/hangout/${event.id}`, options)
            .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {                //update event object to have new database id
                    dispatch(finishDeletingEvent(event)); //update store
                }
            })
            .catch(e => console.error(e));
    };
}