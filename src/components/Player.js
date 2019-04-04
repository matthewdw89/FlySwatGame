import React, { Component } from 'react'

const Player = ({playerRef, position }) => {

  return (
      <div ref={playerRef} >
          <img id="player" src='./images/player.png' style={position} alt="A cartoon drawing of a swatter that has arms and legs"></img>
      </div>
  )
}

export default Player;
