export const Action = Object.freeze({
    LoadEvents: 'LoadEvents',
});

export function loadEvents(events) {
    return {
        type: Action.LoadEvents,
        payload: events,
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
        fetch(`${host}/hangout/${month}/${year}`)
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