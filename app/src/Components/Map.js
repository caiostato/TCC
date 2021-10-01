import './Map.css';
import { GoogleMap, withScriptjs,withGoogleMap} from 'react-google-maps';

function Map() {
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: -22.90556, lng:-47.06083}} //criar script para pegar lat e lng do user.
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Mapping(){
    return (
        <div className="map">
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBjmM6PmQSsm4-chVVucUD4QLkt-g5QGWE`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}