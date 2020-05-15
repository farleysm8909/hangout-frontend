import { Action } from "./actions";

const initialState = {
    isWaiting: false,
    events: [],
};

function reducer(state = initialState, action) {
    //take in an action that got dispatched and make a new state
    switch (action.type) {
        case Action.LoadEvents: //if the event was loading events
            return {
                ...state,               //keep everything from the old state
                events: action.payload,  //but add new events (from action.payload)
            };
        case Action.FinishAddingEvent:
            return {
                ...state,               //keep everything from the old state
                events: [action.payload, ...state.events],  //builds new array of events with newly-added one at the top (HOW TO ADJUST SO IT IS IN ORDER BY DAY?)
            }; 
        default:
            return state;
    }
}

export default reducer;