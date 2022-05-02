import styled from 'styled-components';

const Container = styled.div`

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

const Rede = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 16px;

    position: static;
    width: 360px;
    height: 100%;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
;`

const RedeList = styled.div`
    list-style-type: none;
    margin: 35px 0px;
    padding: 0;
    display: inline-block;
;`

const RedeListItem = styled.div`
    float: left;
    padding: 1px 40px;
;`

const FontType = styled.div`
    position: absolute;
    left: 40px;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 4px;
;`

const Text = styled.div`
    font-family: 'Rawline';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    /* Pure/.pure-100 */
    color: #000000;
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
;`

const Icon = styled.img`
    position: absolute;
    width: 13%;
;`



export { Container, Rede , RedeList, RedeListItem, FontType, Text, Icon }
