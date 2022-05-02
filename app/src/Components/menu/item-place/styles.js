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
    display: grid;
    grid-template-columns: 15% 85%;
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
    font-size: 14px;
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

    align-items: center ;
`;

const ItemListLarge = styled.div`

    display: grid;
    grid-template-rows: 30% 70% ;

    height: 100px;
    margin: 10px 0px;

    align-items: center ;
`;

const TitleContent = styled.div`
    display: grid;
    grid-template-columns: 20% 80% ;
`;
const ItemContent = styled.div`
    display: block ;
`;

const ItemContentLarge = styled.div`
    height: calc(100% - 10%);
    margin: 0% 15%;
`;

const IconPlacement = styled.div`
    margin: 0px 8px;
`;

const Button = styled.div`
    width: 100%;
`;

const Icon = styled.img`
    width: 100%;
`;
const Title = styled.h1`
    font-size: 15pt;
    margin: 0 ;
`;

const ItemText = styled.div`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    display: flex;
    align-items: center;
`;

export { 
    Container, 
    List, Item, Content, Text,
    ListContent, ItemList, Button, Icon, ItemContent, ItemText, IconPlacement,Title, ItemListLarge, TitleContent,ItemContentLarge
}
