import './Map.css';

// import { GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
import { useState, React } from 'react';
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';


// require('dotenv').config({ path:'../../../../.env'})
// const apiKEY = process.env.API_KEY

// const apiKEY = "AIzaSyBdh6Z7Vnenhf8ft20UlEtsPCXkuMNzTfg"

// function Map( props ) {
//     return (
//         <div>
//         <GoogleMap
//         id="map"
//         defaultZoom={13} 
//         defaultCenter={{lat: -22.907104, lng: -47.063240}}
//         />
//         {props.markers.map((marker) => {
//             let latitude = marker.lat;
//             let longitude = marker.lng;

//             return(
//                 <div>
//                     <Marker
//                     id = {marker.id}
//                     position={{ lat: latitude, lng: longitude }}
//                     />
//                     {/* olhar caderno para logica */}

//                 </div>
//             )


//         })}
//         </div>
//         );
//     }

    
// const WrappedMap = withScriptjs(withGoogleMap(Map));
    
const Map = () => {

    const [currentLocation, setCurrentLocation] = useState({lat:-22.930556,lng:-47.058833});

    // const [lat, setLat] = useState(null);
    // const [lng, setLng] = useState(null);
    
    // const getLocation = () => {
    //     if (!navigator.geolocation) {
    //         console.log('if')
    //     } else {
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             setLat(position.coords.latitude);
    //             setLng(position.coords.longitude);
    //         });   
    //     }
    // }   


    return (
        // <div className="map" onLoad={getLocation()}>
        //     <WrappedMap
        //         markers = {props.markers}
        //         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKEY}`}
        //         loadingElement={<div style={{ height: `100%` }} />}
        //         containerElement={<div style={{ height: `100%` }} />}
        //         mapElement={<div style={{ height: `100%` }} />} 
        //     />
        // </div>

        <MapContainer className='map-container' center={currentLocation} zoom={13}>
            <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />

        </MapContainer>


    );
}

export default Map