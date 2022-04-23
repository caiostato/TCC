import { connect } from "react-redux";

const MenuModel = (state) => {
    const places = state
    console.log(places)

}

export default connect(state => ({ state: state}))(MenuModel)