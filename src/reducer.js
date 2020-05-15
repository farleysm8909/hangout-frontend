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
                events: action.payload,  //but add new memories (from action.payload)
            }
        default:
            return state;
    }
}

export default reducer;