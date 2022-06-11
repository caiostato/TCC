import styled from 'styled-components';

//CONTAINER
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 360px;
    height: 450px;
    left: calc(50% - 360px/2);
    top: 56px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
    margin: 0px 0px;
`;

//INPUT
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 0px;

    position: static;
    width: 100%;
    height: 56px;
    left: calc(50% - 99%/2);
    top: 0px;   


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 5px 0px;
`;

const Input = styled.input`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 90%;
    height: 40px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 5px 15px;
`;

const Label = styled.label` 
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 550;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    /* Pure/.pure-100 */
    color: #000000;
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
    padding: 5px 15px;
`;

//TITLE
const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 360px;
    height: 450px;
    left: calc(50% - 360px/2);
    top: 56px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
    margin: 0px 0px;

`;
const Item = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    
    position: static;
    width: 360px;
    height: 40px;
    left: calc(50% - 360px/2);
    top: 0px;
    
    /* Blue Warm Vivid/.blue-warm-vivid-80 */
    
    background: #0C326F;
    
    /* Inside auto layout */
    
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;

`;
const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    margin: 0px 0px;
`;
const Text = styled.div`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 19px;
    display: flex;
    align-items: center;

    /* Pure/.pure */

    color: #FFFFFF;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 1;
    margin: 0px 8px;
`;

//LIST
const ListContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 360px;
    height: 450px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
    margin: 0px 0px;
    margin-top: 10px;
`;

const ItemList = styled.div`

    display: grid;
    grid-template-columns: 20% 80%;

    height: 50px;
    margin: 10px 0px;

    cursor: pointer;
`;

const ItemContent = styled.div`
    display:grid;
    grid-template-columns: 80% 20%;
`;

const ClinicIcon = styled.img`
    margin: 0px 8px;
`;

const Button = styled.div`
    width: 100%;
`;

const Icon = styled.img`
    width: 100%;
`;

const ItemText = styled.div`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
`;

export { 
    Container, 
    InputContainer, Input, Label, 
    List, Item, Content, Text,
    ListContent, ItemList, Button, Icon, ItemContent, ItemText, ClinicIcon
}
