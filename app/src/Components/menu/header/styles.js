import styled from 'styled-components';

const Container = styled.div`

    position: static;
    width: 360px;
    height: 56px;

    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
`;

const Icon = styled.img`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3% 5%;

    position: absolute;
    width: 10%;
`;

export { Container, Icon }
