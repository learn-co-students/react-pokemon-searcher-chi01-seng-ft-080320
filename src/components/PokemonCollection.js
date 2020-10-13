import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemon = () => {
    if(this.props.searched){
      return <PokemonCard pokemon={this.props.searched} key={this.props.searched.id}/>
    } else {
      return this.props.pokemon.map(pokemon => {
        return <PokemonCard pokemon={pokemon} key={pokemon.id}/>
      })
    }
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
       {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
