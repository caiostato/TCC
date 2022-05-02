import { React  } from 'react'
import { connect } from "react-redux";

import Header from './header';
import Footer from './footer';
import PlaceList from './place-list';
import ItemPlace from './item-place';

import { Container } from './styles';

const Menu = ({places,menuState,setMenuState}) => {

    return(
        <Container>
            <Header/>
            {menuState ? 
                <PlaceList places={places} setMenuState={setMenuState} /> :
                <ItemPlace setMenuState={setMenuState}/>
            }
            <Footer/>
        </Container>
    )
}

export default connect(state => ({ state: state}))(Menu);