const setMainMarker = (lat,lng) => ({
    type: "SET_MAIN_MARKER",
    payload: { 
        lat:lat,
        lng:lng
    }
});

const setActivePlace = (item,index) => ({
    type: "SET_ACTIVE_PLACE",
    payload: { 
        data:item,
        index:index
    }
});

const setPlaces = (places) => ({
    type: "SET_PLACES",
    payload: { 
        data:places,
    }
});


export { setMainMarker, setActivePlace, setPlaces }
