import React, { Component } from 'react'


export default class CompleteLevel extends Component {
  render() {
    return (
      <div className="compelete__level">
        <h1>Level Complete</h1>
        <button onClick={this.props.nextlevel}>Start Next Level</button>
      </div>
    )
  }
}
