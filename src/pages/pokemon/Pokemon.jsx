import React, { useEffect, useState } from 'react'
import { Container, Content, Image, Title } from './Pokemons.styles'
import Layout from '../../components/layout/Layout'
import { useParams } from 'react-router-dom'
import Api from '../../services/Api'

export default function Pokemon() {
    const { id } = useParams();

    const [state, setState] = useState()

    const loadPokemon = async () => {
        let data = await Api.getPokemon(id)
        setState(data)
    }

    useEffect(() => {
        loadPokemon()
    }, [id])

    return (
        <Layout>
            <Container>
                {
                    state &&
                    <Content>
                        <Image src={state.sprites.front_default} alt="Pokemon" color={state.types[0].type.name} />
                        <Title>{state.name.charAt(0).toUpperCase() + state.name.slice(1)}</Title>
                    </Content>
                }
            </Container>
        </Layout>
    )
}
