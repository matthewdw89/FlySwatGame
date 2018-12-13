import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    let timeStyle;
    if(this.props.time <= 5){
      timeStyle = {color: "red"}
    }
    return (
      <header className="header">
        <div className="header--top">
          <div className="levels">
            <span>LEVEL: </span>
            <span>{this.props.level}</span>
          </div>
          <div className="timer" style={timeStyle}>
            <span>TIME: </span>
            <span>{this.props.time}</span>
          </div>
        </div>
        <div className="highest">
          <span>HIGHEST LEVEL: </span>
          <span>{this.props.highest}</span>
        </div>
      </header>
    )
  }
}
