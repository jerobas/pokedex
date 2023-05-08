import axios from 'axios'
export const Api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    getPokemons: async () => {
        let pokemons = []
        // 1010
        for (let i = 1; i <= 1010; i++) {
            pokemons.push((await Api.get(`/${i}/`)).data)
        }
        return pokemons
    },
    getPokemon: async (id) => {
        return (await Api.get(`/${id}/`)).data
    }
}