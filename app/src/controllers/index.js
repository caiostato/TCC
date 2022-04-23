import { React } from 'react'

import MapController from './map-controller/';
import MenuController from './menu-controller/';

import './style.css'

const Controller = () => {

    return(
        <div>
            <MenuController />
            <MapController />
        </div>
    )
}

export default Controller;