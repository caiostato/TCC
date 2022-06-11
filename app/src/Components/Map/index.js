
import { React } from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

import osm from '../../services/osm-provider'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'

const Map = ({data,setMenuState}) => {

    const zoom = 12

    const position = [-22.907104, -47.063240]

    const markerIcon = new L.icon({
        iconUrl: require('../../assets/images/markerIcon.png'),
        iconSize: [45,45]
    })
    
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

                {data?.map((item,index) => {
                    console.log(item)
                    return (
                    <div
                        key={index}
                        >
                        <Marker
                            position={
                                [item.coordenadas.lat,
                                item.coordenadas.lng]
                            }
                            icon={markerIcon}
                        >
                            <Popup>
                                {item.nome}
                            </Popup>
                        </Marker>
                    </div>
                    )
                })}
            </MapContainer>
        </div>
    )
}

export default Map;