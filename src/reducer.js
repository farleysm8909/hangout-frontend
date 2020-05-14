const initialState = {
    isWaiting: false,
    events: [
        {id: 1, event_name: "bbq", event_desc: "neighborhood backyard bbq", month: 7, day: 23, year: 2020, start_time: 4, end_time: 8},
        {id: 2, event_name: "Diane's birthday", event_desc: "Surprise birthday for Diane who turns the big 5-0", month: 7, day: 11, year: 2020, start_time: 6, end_time: 10},
        {id: 3, event_name: "school shopping", event_desc: "back to school shopping at Target", month: 8, day: 29, year: 2020, start_time: 1, end_time: 3}
      ],
};

function reducer(state = initialState, action) {
    return state;
}

export default reducer;