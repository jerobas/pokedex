import styled from 'styled-components'

export const typeColor = {
    normal: '#a8a878',
    grass: '#78c850',
    poison: '#a040a0',
    fire: '#f08030',
    water: '#6890f0',
    flying: '#a890f0',
    electric: '#f8d030',
    ice: '#98d8d8',
    fighting: '#c03028',
    ground: '#e0c068',
    psychic: '#f85888',
    bug: '#a8b820',
    rock: '#b8a038',
    ghost: '#705898',
    dark: '#705848',
    dragon: '#7038f8',
    steel: '#b8b8d0',
    fairy: '#eeb4ba'

}

export const Conteiner = styled.main`
    cursor: pointer;
    margin: 10px;
    display: flex;
    flex-direction: row;
    width: 380px;
    height: 150px;
    background-color:${props => typeColor[props.color] + 85};
    border-radius: 25px;
`

export const Content = styled.div`
    opacity: 1;
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex-wrap: nowrap;
    align-items: left;
    justify-content: space-around;
    text-align: left;
    align-self: center;
    margin-left: 13px;

`

export const Image = styled.img`
    width: auto;
    height: 150px;
    align-self: center;
    border-radius: 25px;
    background-color: ${props => typeColor[props.color]};
`
export const Title = styled.span`
    color: #000;
    font-weight: 300;
`
export const Info = styled.h1`
    color: #000;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 1.2px
`

export const TypeContent = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: ${props => typeColor[props.color]};
    width: 90px;
    height: 30px;
    border-radius: 15px;
    margin-right: 10px;
    font-weight: 300;
`

export const TypeContainer = styled.div`
    display: flex;
    width: 100%;
`