import React, { useState, useEffect } from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

function PokemonPage() {

    const [pokemon, setPokemon] = useState([])
    const [query, setQuery] = useState(null)

    useEffect(() => {
      fetchPokemon()
    }, [query])

    const fetchPokemon = () => {
      fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(data => {
        const reversedData = data.reverse()
        const queriedData = data.filter(p => p.name.includes(query))
        const sortedData = queriedData.sort((a,b) => {
          return a.name.startsWith(query) && b.name.startsWith(query) ?
          a.name.localeCompare(b.name) : (a.name.startsWith(query) ? -1 : 1)
        })
          query ? setPokemon(sortedData) :
          setPokemon(reversedData)
        });
    }

    const addPokemon = (data) => {
      fetch('http://localhost:3000/pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
          body: JSON.stringify(data)
        })
      .then(resp => resp.json())
      .then(newPokemon => {
        setPokemon([newPokemon, ...pokemon])
      })
    }

    return (
        <Container>
          <h1>Pokemon Searcher</h1>
          <br />
          <PokemonForm addPokemon={addPokemon} />
          <br />
          <Search setQuery={setQuery} />
          <br />
          <PokemonCollection pokemon={pokemon} />
        </Container>
      )
    }

export default PokemonPage
