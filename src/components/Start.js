import React, { Component } from 'react';
import StartingMusic from './StartingMusic'

export default class Start extends Component {
  render() {
    return (
      <div className="start__window">
        {/* <StartingMusic></StartingMusic> */}
        <div className="start__box">
            <h1>SWAT</h1>
            <button title="The aim of the game is remove all the pesky bugs within a set timer" onClick={this.props.gameStart}>START</button>
        </div>
      </div>
    )
  }
}
