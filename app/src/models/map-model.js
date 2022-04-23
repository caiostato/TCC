import { connect } from "react-redux";

function MapModel({places,marker}){

    // console.log(places)

    
}

// const mapStateToProps = (state) => ({
//     places: state.places,
//     marker: state.mainMarker
// })

export default connect(state => ({
    places: state.places,
    marker: state.mainMarker
}))(MapModel)