
import { React } from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

// import { useDispatch } from "react-redux";
// import { setActivePlace } from '../../store/actions/actions';

import osm from '../../services/osm-provider'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'

const Map = ({data,setMenuState}) => {

    // let dispatch = useDispatch();

    const zoom = 12
    const position = [-22.907104, -47.063240]

    let items = []

    const markerIcon = new L.icon({
        iconUrl: require('../../assets/images/markerIcon.png'),
        iconSize: [45,45]
    })

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
                    <div
                        key={index}
                        >
                        <Marker
                            position={
                                [item.coordenadas.lat,
                                item.coordenadas.lng]
                            }
                            icon={markerIcon}
                            // onClick={()=>{
                            //     // dispatch(setActivePlace(item,index))
                            //     // setMenuState(true)
                            //     console.log('das')
                            // }}
                            
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