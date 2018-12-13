import React, { Component } from 'react';

export default class Insect extends Component {

  render() {
      let bugImg= this.props.alive ? 'alive' : 'dead'; 
    return (
        <div onClick={() => { this.props.hit(this.props.id) }} style={this.props.style} id={bugImg}>
            <img src={this.props.alive ? './images/bug2.png' : './images/bug2Dead.svg'} alt="Bug"/>
        </div>
    )
  }
}
