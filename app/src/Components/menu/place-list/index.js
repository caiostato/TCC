import React from 'react';

import { useDispatch } from "react-redux";
import { setActivePlace } from '../../../store/actions/actions';

import goIcon from '../../../assets/images/goBtn'
import clinicIcon from '../../../assets/images/ambulatory_clinic.png'
import Separator from '../../separator';

import ArrowForward from '@mui/icons-material/ArrowForwardIos';


import { 
    Container,
    InputContainer, Input, Label,
    List, Item, Content, Text,
    ListContent, ItemList, Button, Icon, ItemContent, ItemText, ClinicIcon
} from './styles';

function PlaceList({places,setMenuState}) {

    let dispatch = useDispatch();

    let items = []

    for(let i=0;i <=15; i++){

        if(places[i] !== undefined){
            items.push(places[i])
        }
    }

    return (
        <Container>
            <List>
                <Item>
                    <Content>
                        <Text>
                            Unidade de Saúde de Campinas
                        </Text>
                    </Content>
                </Item>
                <InputContainer>
                    <Label>
                        Endereço
                    </Label>
                    <Input type='text' name='endereco' placeholder='Digite o endereço'>

                    </Input>
                </InputContainer>

                <ListContent>

                    <Separator/>
                    
                    {items?.map((item, index) => {
                        return(
                            <>
                                <ItemList key={index} onClick={()=>{
                                    dispatch(setActivePlace(item,index))
                                    setMenuState(false)
                                }}>
                                    <ClinicIcon src={clinicIcon}/>
                                    <ItemContent>
                                        <ItemText>
                                            {item.nome}
                                        </ItemText>
                                        <Button onClick={()=>{
                                            dispatch(setActivePlace(item,index))
                                            setMenuState(false)
                                        }}>
                                            <Icon src={goIcon} alt='go icon'/>
                                        </Button>
                                    </ItemContent>

                                </ItemList>
                                <Separator/>
                            </>
                        )
                    })

                    }
                </ListContent>

            </List>
        </Container>
    )
}

export default PlaceList;