
import { React,useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


import './map.css'

const position = [-22.907104, -47.063240]

const Map = () => {

    return(
        <div className='container'>
            <MapContainer center={position} zoom={13} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Marker position={position}>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map;