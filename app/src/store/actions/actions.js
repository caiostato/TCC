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


export { setMainMarker, setActivePlace }
