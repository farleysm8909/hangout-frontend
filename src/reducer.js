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
                isWaiting: false,
                events: action.payload,  //but add new events (from action.payload)
            };
        case Action.FinishAddingEvent:
            return {
                ...state,               //keep everything from the old state
                isWaiting: false,
                events: [{...action.payload, isEditing: true}, ...state.events],  //builds new array of events with newly-added one at the top (HOW TO ADJUST SO IT IS IN ORDER BY DAY?)
            };
        case Action.EnterEditMode:
            return {
                ...state,
                events: state.events.map(event => {
                    if (event.id === action.payload.id) {
                        return { ...event, isEditing: true };
                    } else {
                        return event;
                    }
                })
            };
        case Action.LeaveEditMode:
            return {
                ...state,
                events: state.events.map(event => {
                    if (event.id === action.payload.id) {
                        return { ...event, isEditing: undefined };
                    } else {
                        return event;
                    }
                })
            };
        case Action.FinishSavingEvent:
            return {
                ...state,
                isWaiting: false,
                events: state.events.map(event => {
                    if (event.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return event;
                    }
                })
            };
            case Action.FinishDeletingEvent:
                return {
                    ...state,
                    isWaiting: false,
                    events: state.events.filter(event => event.id !== action.payload.id),
                };
            case Action.StartWaiting:
                return {
                    ...state,
                    isWaiting: true,
                };
        default:
            return state;
    }
}

export default reducer;