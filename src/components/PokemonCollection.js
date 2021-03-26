import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

function PokemonCollection(props) {

    const pokemon = props.pokemon

    const renderPokemonCards = () => {
      return pokemon.map((card, index) => {
        return <PokemonCard {...card} key={index} />
      })
    }

    return (
      <Card.Group itemsPerRow={6}>
        { renderPokemonCards() }
      </Card.Group>
    )
  }

export default PokemonCollection;
