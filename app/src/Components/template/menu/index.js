import React from 'react';

import { Container, Header, Icon,
  List, Item, ItemText, ItemButton,
  InputContainer, InputText, InputPlaceholder,
  Footer, FooterText, FooterIconContainer, FooterIcon,
  DisplayContainer, DisplayText
  } from './styles';

function Menu() {
  return (
    <div>
      <Container>
        <Header>
          <Icon/>
        </Header>
        <List>
          <DisplayContainer>
            <DisplayText/>
          </DisplayContainer>
          <InputContainer>
            <InputText/>
            <InputPlaceholder/>
          </InputContainer>
          <Item>
            <Icon/>
            <ItemText/>
            <ItemButton/>
          </Item>
          <Item>
            <Icon/>
            <ItemText/>
            <ItemButton/>
          </Item>
          <Item>
            <Icon/>
            <ItemText/>
            <ItemButton/>
          </Item>
          <Item>
            <Icon/>
            <ItemText/>
            <ItemButton/>
          </Item>
          <Item>
            <Icon/>
            <ItemText/>
            <ItemButton/>
          </Item>
        </List>
        <Footer>
          <FooterText/>
          <FooterIconContainer>
            <FooterIcon/>
            <FooterIcon/>
            <FooterIcon/>
          </FooterIconContainer>
        </Footer>
      </Container>
    </div>
  );
}

export default Menu;