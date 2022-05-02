import React from 'react';

import { connect } from "react-redux"
import { useDispatch } from "react-redux";
import { setActivePlace } from '../../../store/actions/actions';

import ArrowBack from '@mui/icons-material/ArrowBackIosNew';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

import Separator from '../../separator';


import { 
    Container,
    List, Item, Content, Text,
    ListContent, ItemList, Button, ItemContent,
    ItemText, IconPlacement, Title, ItemListLarge,TitleContent,ItemContentLarge
} from './styles';

function ItemPlace({state,setMenuState}) {

    let dispatch = useDispatch();
    const item = state.marker.activePlace.item

    const services = item['servicos']
    const especi = item['especializacoes']

    console.log(item)

    return (
        <Container>
            <List>
                <Item>
                    <Content>
                        <Button onClick={()=>{
                            dispatch(setActivePlace({}))
                            setMenuState(true)
                        }}>
                            <ArrowBack style={{fontSize: 18, color: 'white'}}/>
                        </Button>
                        <Text>
                            {item.nome}
                        </Text>
                    </Content>
                </Item>

                <ListContent>
                    <ItemList>
                        <IconPlacement> 
                            <PlaceIcon style={{fontSize: 30, color: 'grey'}}/>
                        </IconPlacement>
                        <ItemContent>
                            <ItemText>
                                {item.endereco}
                            </ItemText>
                        </ItemContent>
                    </ItemList>
                    <Separator />
                    <ItemList>
                        <IconPlacement> 
                            <LocalPhoneIcon style={{fontSize: 30, color: 'grey'}}/>
                        </IconPlacement>
                        <ItemContent>
                            <ItemText>
                                {item.telefone}
                            </ItemText>
                        </ItemContent>
                    </ItemList>
                    <Separator />
                    <ItemListLarge>
                        <TitleContent>
                            <IconPlacement> 
                                <MedicalServicesIcon style={{fontSize: 30, color: 'grey'}}/>
                            </IconPlacement>
                            <Title>
                                Serviços
                            </Title>
                        </TitleContent>
                        <ItemContentLarge>

                            <ItemText>
                                Dialise: {services.dialise ? 'Possui' : 'Não Possui'}
                            </ItemText>
                            <ItemText>
                                Hemoterapia: {services.hemoterapia ? 'Possui' : 'Não Possui'}
                            </ItemText>
                            <ItemText>
                                Quimioterapia e Radioterapia: {services.quimioRadio ? 'Possui' : 'Não Possui'}
                            </ItemText>
                        </ItemContentLarge>
                    </ItemListLarge>
                    <Separator />
                    <ItemListLarge>
                    <TitleContent>
                            <IconPlacement> 
                                <MedicalServicesIcon style={{fontSize: 30, color: 'grey'}}/>
                            </IconPlacement>
                            <Title>
                                Especializações
                            </Title>
                        </TitleContent>
                        <ItemContentLarge>
                            {especi?.map((node)=>{

                                if(node!=null){
                                    return (
                                        <ItemText>
                                            {node}
                                        </ItemText>
                                    )
                                }
                                else{
                                    return(
                                        <></>
                                    )
                                }
                            })}

                        </ItemContentLarge>
                    </ItemListLarge>
                    <Separator />
                    
                </ListContent>


            </List>
        </Container>
    )
}

export default connect(state => ({ state: state}))(ItemPlace);