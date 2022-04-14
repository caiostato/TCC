import { React, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const position = [-22.907104, -47.063240]

const Map = () => {

    return(
            <MapContainer center={position} zoom={13} style={{
                height:"100vh",
                width:"100vw"
            }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
    )
}

export default Map;