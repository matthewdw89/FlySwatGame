import React from 'react'

const Player = ({position}) => {
  return (
    <img id="player" src='./images/player.png' style={position} alt="A cartoon drawing of a swatter that has arms and legs"></img>
  )
}

export default Player