const INITIAL_STATE = {

    mainMarker: {
        lat: -22.907104,
        lng: -47.063240
    },
    places: []
}


function notes(state = INITIAL_STATE, action) {
    switch (action.type) {
    case "SET_MAIN_MARKER":

        return ({
            lat: action.payload.lat,
            lng: action.payload.lng
        })

    case "SET_PLACES":
        let places = action.payload.places
        let mainMarker = state.mainMarker

        return {
            mainMarker:mainMarker,
            places:places
        }
    default:
        return state;
    }
}

export default notes