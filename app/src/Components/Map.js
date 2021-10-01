import './Map.css';
import { GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

const apiKEY = 'AIzaSyBjmM6PmQSsm4-chVVucUD4QLkt-g5QGWE';

let lat,lng;

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(pos => {
        lat =pos.coords.latitude;
        lng=pos.coords.longitude;
    })
}

function Map() {
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: lat, lng: lng}} //criar script para pegar lat e lng do user.
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Mapping(){
    return (
        <div className="map">
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />} 
            />
        </div>
    );
}