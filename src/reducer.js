const initialState = {
    isWaiting: false,
    events: [
        {id: 1, event_name: "Backyard BBQ", event_desc: "neighborhood backyard bbq", month: 7, day: 23, year: 2020, start_time: "4pm", end_time: "8pm"},
        {id: 2, event_name: "Diane's birthday", event_desc: "Surprise birthday for Diane who turns the big 5-0", month: 7, day: 11, year: 2020, start_time: "6pm", end_time: "10pm"},
        {id: 3, event_name: "School shopping", event_desc: "back to school shopping at Target", month: 8, day: 29, year: 2020, start_time: "1pm", end_time: "3:30pm"}
      ],
};

function reducer(state = initialState, action) {
    return state;
}

export default reducer;