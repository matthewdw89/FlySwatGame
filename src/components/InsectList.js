import React, { Component } from 'react';
import Insect from './Insect';

export default class InsectList extends Component {

  componentDidMount() {
    // console.log("mounted")
    this.props.bugs.forEach((each) => {
        this.props.moveInsect(each)
    });
    this.props.bugs.forEach((each)   => {
      setInterval(() => {
        this.props.moveInsect(each)
      }, Math.random() * (3500 - 800) + 800)
    })
  }

  componentDidUpdate(){
    // console.log("updated")
    let numberDead = [];
    this.props.bugs.forEach( bug => {
      if(bug.insectAlive === false){
        numberDead.push(bug);
      }
    })
    if(numberDead.length === this.props.level){
      this.props.increaseLevel();
    }
  }

  render() {
    return (
      <div>
          {
              this.props.bugs.map( (each, i) => {
                  return <Insect
                    hit={this.props.hit}
                    alive={each.insectAlive} 
                    style={each.insectPos}
                    key={i}
                    id={i}
                  ></Insect>
              })
          }
      </div>
    )
  }
}
