import SetData from "../../utils/setData"

const INITIAL_STATE = {

    mainMarker: {
        lat: -22.907104,
        lng: -47.063240
    },
    activePlace: {},
    places: SetData()
}


function notes(state = INITIAL_STATE, action) {
    switch (action.type) {
    case "SET_MAIN_MARKER":

        return ({
            mainMarker:{
                lat: action.payload.lat,
                lng: action.payload.lng
            },
            activePlace:state.activePlace,
            places:state.places
        })

    case "SET_PLACES":

        return ({
            mainMarker:state.mainMarker,
            activePlace:state.activePlace,
            places:action.payload.data
        })

    case "SET_ACTIVE_PLACE":

        let activePlace = {
            item:action.payload.data,
            index:action.payload.index
        }

        return ({
            mainMarker:state.mainMarker,
            activePlace:activePlace,
            places:state.places
        })

    default:
        return state;
    }
}

export default notes