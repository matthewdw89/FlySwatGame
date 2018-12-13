// // "proxy": "http://localhost:3000"
import React, { Component } from 'react';
import './App.css';
import Start from './components/Start';
import Header from './components/Header';
import InsectList from './components/InsectList'
import Gameover from './components/Gameover';
import Player from './components/Player';
import CompleteLevel from './components/CompleteLevel';

class App extends Component {
  constructor(){
    super()
    this.wall = React.createRef();
    this.insect1 = React.createRef();
    this.playerPosition= React.createRef();
    this.backgroundAudio = new Audio('/music/A Bugs Life Game Soundtrack - Anthill.mp3');
    this.splat = new Audio('/music/splat2.mp3');
    this.hit = new Audio('/music/hit.mp3');
    this.gameOver = new Audio('/music/gameover.mp3')
    this.flySound = new Audio('/music/flySound.mp3')
  }

  state = {
    startPage: true,
    playerPos: {
      left:0,
      top:0
    },
    currentLevel: 1,
    leveltimer: 20,
    bugs: [],
    increaseLevel: false,
    highestLevel: 1
  }
  
  gameStart = () => {
    this.setState({
      startPage:false
    })
    this.bugGenerate(this.state.currentLevel)
    this.countDown()
    this.backgroundAudio.play();
  }

  playAgain = () => {
    this.setState({
      startPage: true,
      leveltimer: 20,
      currentLevel: 1
    })
  }

  countDown = () => {
    let timer = setInterval( ()=>{
      this.setState({
        leveltimer: this.state.leveltimer - 1
      }, () => {
        if (this.state.increaseLevel === true){
          clearInterval(timer);
        }
        if (this.state.leveltimer === 0) {
          clearInterval(timer);
        }
      }) }, 1000)
  }

  bugGenerate = (level) => {
    let buglist=[];
    for(let i = 0; i < level; i++){
      let h = window.innerHeight - 50;
      let w = window.innerWidth - 50;
      let nh = Math.floor(Math.random() * h);
      let nw = Math.floor(Math.random() * w);
      let newbug = {
        insectAlive: true,
        insectPos: {
          top: nh,
          left: nw,
        }}
      buglist.push(newbug);
      this.setState({
        bugs: buglist
      })
    }
  }

  InsectHit = (index)=>{
    this.splat.play();
    let currentLeft = this.state.bugs[index].insectPos.left
    let bugsCopy = [...this.state.bugs];
    bugsCopy[index] = {
      insectAlive: false,
      insectPos: {
        top: window.innerHeight + 400,
        left: currentLeft,
      }
    }
    this.setState({
      bugs: bugsCopy
    })
  }

  increaseLevel = () => {
    console.log("increase")
    this.setState({
      currentLevel: this.state.currentLevel + 1,
      increaseLevel: true,
      bugs: []
    })
    if(this.state.currentLevel === this.state.highestLevel){
      this.setState({
        highestLevel: this.state.highestLevel + 1
      })
    }
  }
  nextLevel = () =>{
    console.log("next")
    this.setState({
      increaseLevel:false,
      leveltimer: 20
    })
    this.bugGenerate(this.state.currentLevel);
    this.countDown();
  }

  playerPos = (e) =>{
    e.persist();
    let y = e.screenY
    let x = e.screenX
    this.setState({
      playerPos: {
        left: x -35,
        top: y -125
      }
    })
  }

  moveInsect = (insect) => {
    let h = window.innerHeight - 50;
    let w = window.innerWidth - 50;
    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);
    insect.insectPos = {
      top: nh,
      left: nw
    }
    return insect;
  }

  componentDidMount() {
    
  }

  render() {
    if(this.state.startPage){
      return(
        <div className="start__wall" ref={this.wall}>
          <Start gameStart={this.gameStart}></Start>
        </div>
      )
    }
    else{
      if(this.state.increaseLevel){
        return(
          <div className="start__wall" ref={this.wall}>
            <CompleteLevel nextlevel={this.nextLevel}></CompleteLevel>
          </div>
        ) 
      }
      else if(this.state.leveltimer > 0){
        return (
          <div className="wall" ref={this.wall} flySound={this.flySound.play()} onClick={() => {this.hit.play()}} onMouseMove={this.playerPos}>
            <Header time={this.state.leveltimer} level={this.state.currentLevel} highest={this.state.highestLevel}></Header>
            <InsectList bugs={this.state.bugs} hit={this.InsectHit} moveInsect={this.moveInsect} increaseLevel={this.increaseLevel} level={this.state.currentLevel}></InsectList>
            <Player ref={(ref) => {this.playerPosition = ref}} position={this.state.playerPos}></Player>
          </div>
        )
      }
      else{
        return(
          <div className="start__wall" ref={this.wall}>
            <Gameover gameoverSound={this.gameOver.play()} playAgain={this.playAgain}></Gameover>
          </div>
        ) 
      }
    }
  }
}

export default App;
