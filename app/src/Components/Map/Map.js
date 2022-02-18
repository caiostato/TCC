import './Map.css';
import { GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
require('dotenv').config({ path:'../../../../.env'})

const apiKEY = process.env.API_KEY

function Map() {
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: -23.550520, lng: -46.633308}} //criar script para pegar lat e lng do user.
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