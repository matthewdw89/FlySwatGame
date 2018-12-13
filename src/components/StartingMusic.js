import React, { Component } from 'react'

export default class StartingMusic extends Component {
  render() {
    return (
      <div>
         <audio className="audio" src="./music/A Bugs Life Game Soundtrack - Anthill.mp3" controls autoPlay/>
      </div>
    )
  }
}
