import React, { Component } from 'react'

export default class Player extends Component {
 

  render() {
    return (
        <div ref={this.props.playerRef} >
            <img id="player" src='./images/player.png' style={this.props.position} alt="A cartoon drawing of a swatter that has arms and legs"></img>
        </div>
    )
  }
}
