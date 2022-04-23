const setMainMarker = (lat,lng) => ({
    type: "SET_MAIN_MARKER",
    payload: { 
        lat:lat,
        lng:lng
    }
});

const setPlaces = (data) => ({
    type: "SET_PLACES",
    payload: { 
        places: data
    }
});


export { setMainMarker, setPlaces }
