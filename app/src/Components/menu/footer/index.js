import React from 'react';

import { Container, Rede , RedeList, RedeListItem, FontType, Text, Icon } from './styles';

import Separator from '../../separator'

import iconIFSP from '../../../assets/images/iconifsp.ico'
import iconGithub from '../../../assets/images/25231.ico'

function Footer() {
    return(
        <Container>
            <Separator />

            <Rede>
                <FontType>
                    <Text>
                        Redes Sociais
                    </Text>
                </FontType>

                <RedeList>
                    <RedeListItem>
                        <a href='https://github.com/caiostato/TCC'>
                            <Icon src={iconGithub} alt='icon GitHub' />
                        </a>
                    </RedeListItem>
                    <RedeListItem>
                        <a href='https://portal.cmp.ifsp.edu.br/'>
                            <Icon src={iconIFSP} alt='icon GitHub' />
                        </a>
                    </RedeListItem>
                </RedeList>

            </Rede>

        </Container>
    );
}

export default Footer;