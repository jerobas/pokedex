import styled from 'styled-components';
import { typeColor } from '../../components/CardMon/Card.styles.js';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    height: 160px;
    border-radius: 50px;
    background-color:  ${props => typeColor[props.color]}
`


export const Title = styled.h1`
    color: #000;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 1.2px
`