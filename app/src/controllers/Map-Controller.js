import { React } from 'react'

import Map from '../components/map/map';
import getData from '../models/map-model';

const MapController = () => {

    getData()
    
    return(
        <div>
            <Map/>
        </div>
    )
}

export default MapController;