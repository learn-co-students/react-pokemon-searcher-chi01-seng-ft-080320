import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'

function PokemonCard(props) {

  const name = props.name
  const hp = props.hp
  const sprites = props.sprites
  const frontImage = props.sprites.front
  const backImage = props.sprites.back
  
  const [image, setImage] = useState(null)
  const [toggleCard, setToggleCard] = useState(true)

  useEffect(() => {
    toggleCard ? setImage(frontImage) : setImage(backImage)
  }, [toggleCard, sprites])

  const handleClick = () => {
    setToggleCard(prevToggleCard => !prevToggleCard)
  }
  
    return (
      <Card onClick={() => handleClick()}>
        <div>
          <div className="image">
            <img src={image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }

export default PokemonCard;
