import React from 'react'
import { Conteiner, Content, Image, Info, Title, TypeContent, TypeContainer } from './Card.styles'
import { useNavigate } from 'react-router-dom'

export default function Card({ info, pokemon, types, image }) {

  const navigate = useNavigate();

  const changeImage = () => {
    let img = document.getElementById(pokemon);
    img.style.transition = "all .3s ease"
    if(image[1])
      img.src = image[1]
    else img.src = image[0]
  }

  const resetImage = () => {
    let img = document.getElementById(pokemon);
    img.style.transform = "none";
    img.src = image[0]
  }

  const handleClick = () => {
    navigate(`/${pokemon}/${info}`)
  }

  return (
    <Conteiner
      color={types[0].name}
      onClick={handleClick}
    >
      <Content>
        <Title>Nº{info}</Title>
        <Info>{pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</Info>
        <TypeContainer>
          {
            types && types.map((type, i) => {
              return (
                <TypeContent
                  color={type.name}
                  key={i}
                >
                  {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                </TypeContent>
              )
            })
          }
        </TypeContainer>
      </Content>
      <Image
        src={image[0]}
        onMouseOver={changeImage}
        onMouseOut={resetImage}
        id={pokemon}
        color={types[0].name}
      />
    </Conteiner>
  )
}
