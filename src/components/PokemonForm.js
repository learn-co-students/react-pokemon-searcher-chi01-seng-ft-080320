import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name:"",
    hp: "",
    back:"",
    front:""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    const reqObj = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        hp: this.state.hp,
        sprites: {
          front: this.state.front,
          back: this.state.back
        }
      })
    }

    fetch('http://localhost:3000/pokemon', reqObj)
    .then(resp => resp.json())
    .then(pokemon => {
      this.props.addPokemon(pokemon)
      this.setState({
        name:"",
        hp: "",
        back:"",
        front:""
      })
    })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit }>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" value={this.state.front} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" value={this.state.back} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
