import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card from '../../components/CardMon/Card'
import { Container, Content } from './Home.styles'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonsData } from '../redux/actions/pokemons_actions.js'
import Loading from '../../components/Loading/Loading'
import Pagination from '../../components/Pagination/Pagination'
import Filter from '../../components/Filter/Filter'

export default function Home() {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons.data)
    const isLoading = useSelector(state => state.pokemons.isLoading);
    const pokemon_types = useSelector(state => state.pokemons.pokemon_types)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPokemons = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const visiblePokemons = pokemons.slice(startIndex, endIndex);

        return visiblePokemons.map((pokemon) => (
            <Card
                key={pokemon.id}
                info={pokemon.id}
                pokemon={pokemon.name}
                image={
                    pokemon.sprites?.front_default && pokemon.sprites?.back_default
                        ? [pokemon.sprites?.front_default, pokemon.sprites?.back_default]
                        : [pokemon.sprites.other["official-artwork"]?.front_default]
                }
                types={pokemon.types.map((tp) => tp.type)}
            />
        ));
    };


    useEffect(() => {
        dispatch(getPokemonsData());
    }, [dispatch]);

    return (
        <Layout>
            {
                isLoading ?
                    <Loading />
                    :
                    <Container>
                        <Filter options={pokemon_types} />
                        <Content>
                            {renderPokemons()}
                        </Content>
                        <Pagination
                            totalPages={Math.ceil(pokemons.length / itemsPerPage)}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </Container>
            }

        </Layout>
    )
}
