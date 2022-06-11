import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    z-index: 2;
    position: absolute;
    width: 360px;
    height: 100%;

    background: #FFFFFF;
    box-shadow: 6px 0px 6px rgba(0, 0, 0, 0.16);
`;

const Header = styled.div`
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
const Icon = styled.div`
  margin: 5px 10px;

  width: 45px;
  height: 45px;
  border-radius: 1rem ;

  background-color: #D3D3D3;
`;
const List = styled.div`

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
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`;

const Item = styled.div`

  display:grid ;
  grid-template-columns: 20% 60% 20%;

  margin:0;
  width: 100% ;
  height: 55px;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`;
const ItemText = styled.div`

  margin:0;
  width: 100%;
  height: 20px;
  border-radius: 1rem ;

  margin-top: 5px ;

  background-color: #D3D3D3;
`;

const ItemButton = styled.div`
  margin: 5px 20px;

  width: 20px;
  height: 20px;
  border-radius: 0.5rem ;

  background-color: #0C326F;
`;

const InputContainer = styled.div`
  display:grid ;
  grid-template-rows: 40% 60%;

  margin:0;
  width: 100% ;
  height: 70px;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`;

const InputText = styled.div`
  margin:10px;
  width: 30%;
  height: 20px;
  border-radius: 0.5rem ;

  margin-top: 5px ;

  background-color: #D3D3D3;

`;

const InputPlaceholder = styled.div`
  margin:10px;
  width: 70%;
  height: 30px;
  border-radius: 0.5rem ;

  margin-top: 5px ;

  background-color: #D3D3D3;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 360px;
    height: 100px;
    left: calc(50% - 360px/2);
    bottom: 0px;

    /* Pure/.pure */
    background: #FFFFFF;
    /* Inside auto layout */

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
`;

const FooterText = styled.div`
  margin:10px;
  width: 20%;
  height: 30px;
  border-radius: 0.5rem ;

  margin-top: 5px ;

  background-color: #D3D3D3;
`;
const FooterIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 1rem ;
  margin: 0px 10px;

  background-color: #D3D3D3;
`;
const FooterIconContainer = styled.div`
  margin: 10px 0px;
  display: grid;
  grid-template-columns: 30% 30% 30% 20% 20%;
`;

const DisplayContainer = styled.div`
  width: 100% ;
  height: 40px;

  background-color: #0C326F ;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`;

const DisplayText = styled.div`
  margin: 10px 10px;
  background-color: #0a285a ;
  width:60% ;
  height: 20px;
  border-radius: 1rem ;
`;

export { Container, Header, Icon,
  List, Item, ItemText, ItemButton,
  InputContainer, InputText, InputPlaceholder,
  Footer, FooterText, FooterIcon, FooterIconContainer,
  DisplayContainer, DisplayText
}
