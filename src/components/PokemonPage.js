import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searched: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState({
        pokemon: pokemon 
      })
    })
  }

  addPokemon = (pokemon) => {
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    })
  }


  handleChange = (e) => {
  let search = this.state.pokemon.find(pokemon => pokemon.name === e.target.value)
  if(search){
    this.setState({
      searched: search
    })
    return this.state.pokemon.filter(pokemon => pokemon === search)
  } else {
    this.setState({
      searched: ''
    })
  }
}


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search handleChange={this.handleChange}/>
        <br />
        <PokemonCollection pokemon={this.state.pokemon}
        searched={this.state.searched}
        />
      </Container>
    )
  }
}

export default PokemonPage
