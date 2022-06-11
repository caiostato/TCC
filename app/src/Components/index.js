import { React, useState } from 'react';
import { connect } from 'react-redux';

import './styles.css'

import SetData from '../utils/setData';

// import Template from '../assets/images/template.png'

import Template from './template';

import Map from './map';
import Menu from './menu'

function Controller({ places }) {

    const [menuState,setMenuState] = useState(true)
    const [loadingState, setLoadingState] = useState(true)

    
    return (
        <div>
        {loadingState ?
            <div>
                <Menu places={places} menuState={menuState} setMenuState={setMenuState}/>
                <Map data={places} setMenuState={setMenuState}/>
            </div> :
            <div>
                <Template/>
            </div>
            // <div className='template'>
            //     <img src={Template} alt='template'/>
            // </div>
        }
        </div>
    )
}
function mapStateToProps(state) {
    return { places: state.marker.places }
}

export default connect(mapStateToProps)(Controller);