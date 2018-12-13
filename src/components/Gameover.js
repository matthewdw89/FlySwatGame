import React, { Component } from 'react';

export default class Gameover extends Component {
  render() {
    return (
      <div className="gameover">
        <h1>GAME OVER</h1>
        <button onClick={this.props.playAgain}>Play again</button>
      </div>
    )
  }
}
