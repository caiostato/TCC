import { React, useState } from 'react';
import { connect } from 'react-redux';

import './styles.css'

import Map from './map';
import Menu from './menu'

function Controller(data) {

    const places = data.state.marker.places

    const [menuState,setMenuState] = useState(true)

    return (
        <div>
            <Menu places={places} menuState={menuState} setMenuState={setMenuState}/>
            <Map data={places} setMenuState={setMenuState}/>
        </div>
    )
}

export default connect(state => ({ state: state}))(Controller);