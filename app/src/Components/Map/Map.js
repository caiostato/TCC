
import { React, useState } from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

import L from 'leaflet'

import osm from '../../services/osm-provider'

import 'leaflet/dist/leaflet.css'
import './map.css'

const Map = ({data}) => {

    const [zoom,setZoom] = useState(12)
    const position = [-22.907104, -47.063240]

    let items = []

    const markerIcon = new L.icon({
        iconUrl: require('../../assets/images/markerIcon.png'),
        iconSize: [45,45]
    })

    //temp
    // for(contador;contador <=10; setContador(contador+1)){

    //     console.log(data[contador])
    // }

    for(let i=0;i <=15; i++){

        if(data[i] !== undefined){
            items.push(data[i])
        }
    }


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

                {items?.map((item,index) => {

                    return (
                    <div key={index}>
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