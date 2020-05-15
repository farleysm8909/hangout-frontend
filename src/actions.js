export const Action = Object.freeze({
    LoadEvents: 'LoadEvents',
});

export function loadEvents(events) {
    return {
        type: Action.LoadEvents,
        payload: events,
    };
}