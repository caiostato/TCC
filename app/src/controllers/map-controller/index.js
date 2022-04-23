import { React } from 'react'

import { useDispatch } from "react-redux";

import Map from '../../components/map/map';
// import MapModel from '../models/map-model';

import SetData from '../../utils/setData'
import { setPlaces } from "../../context/actions/actions";

const MapController = (props) => {
    let dispatch = useDispatch();

    let data = SetData()
    dispatch(setPlaces(data))

    // MapModel()

    return(
        <div>
            <Map data={data}/>
        </div>
    )
}

export default MapController;