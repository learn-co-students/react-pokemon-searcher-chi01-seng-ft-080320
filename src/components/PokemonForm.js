import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

function PokemonForm(props) {

    const [data, setData] = useState({
      name: '',
      hp: 0,
      sprites: {
        front: '',
        back: ''
      }
    })

    const handleSubmit = () => {
      props.addPokemon(data)
    }

    const handleChange = (value, field) => {
        field === 'front' || field === 'back' ?
        setData(prevData => ({
          ...prevData,
          sprites: { ...prevData.sprites, [field]: value}
        })) :
        setData({
          ...data,
          [field]: value
        })
    };
    
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={(e) => handleChange(e.target.value, e.target.name)} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={(e) => handleChange(e.target.value, e.target.name)} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={(e) => handleChange(e.target.value, e.target.name)} fluid label="Front Image URL" placeholder="url" name="front" />
            <Form.Input onChange={(e) => handleChange(e.target.value, e.target.name)} fluid label="Back Image URL" placeholder="url" name="back" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }

export default PokemonForm
