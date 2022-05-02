import React from 'react';

import { Container, Icon } from './styles';

import iconIFSP from '../../../assets/images/iconifsp.ico'

function Header() {
    return (
        <Container>
            <Icon src={iconIFSP} alt='IFSP Icon' ></Icon>
        </Container>

    );
}

export default Header;