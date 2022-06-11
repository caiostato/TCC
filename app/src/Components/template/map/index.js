
import { React } from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'

import osm from '../../../services/osm-provider'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'

const Map = () => {

    const zoom = 12
    const position = [-22.907104, -47.063240]

    return(
        <div className='container'>
            <MapContainer
                center={position}
                zoom={zoom} 
                >
                <TileLayer
                    attribution={osm.maptiler.attribution}
                    url={osm.maptiler.url}
                    />
            </MapContainer>
        </div>
    )
}

export default Map;