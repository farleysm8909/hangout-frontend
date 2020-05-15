export const Action = Object.freeze({
    LoadEvents: 'LoadEvents',
    FinishAddingEvent: 'FinishAddingEvent',
});

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

export function startAddingEvent(year, month) { //note: month/year will correspond to whatever month/year user accesses app
    return dispatch => {
        const event = { 
            name: '', day: '', month, year, start_time: '', end_time: '' //add users attending? 
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
        }

        fetch(`${host}/hangout`)
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