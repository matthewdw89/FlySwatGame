import React, { Component } from 'react';

const Start = ({ gameStart}) => {
  return (
    <div className="start__window">
      <div className="start__box">
          <h1>SWAT</h1>
          <button title="The aim of the game is remove all the pesky bugs within a set timer" onClick={gameStart}>START</button>
      </div>
    </div>
  )
}

export default Start