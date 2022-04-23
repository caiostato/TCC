import { React } from 'react'

import { connect } from "react-redux";

import Menu from '../../components/menu/menu';
// import menuModel from '../../models/menu-model';

const MenuController = (data) => {

    const places = data.state.marker.places
    


    return(
        <div>
            <Menu places={places}/>
        </div>
    )
}

export default connect(state => ({ state: state}))(MenuController);