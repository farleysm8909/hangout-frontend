const initialState = {
    isWaiting: false,
    events: [
        {id: 1, event_name: "Backyard BBQ", month: 7, day: 23, year: 2020, start_time: "4pm", end_time: "8pm"},
        {id: 2, event_name: "Diane's birthday", month: 7, day: 11, year: 2020, start_time: "6pm", end_time: "10pm"},
        {id: 3, event_name: "School shopping", month: 8, day: 29, year: 2020, start_time: "1pm", end_time: "3:30pm"}
      ],
};

function reducer(state = initialState, action) {
    return state;
}

export default reducer;