import React from 'react';

const Gameover = ({ playAgain }) => {
  return (
    <div className="gameover">
      <h1>GAME OVER</h1>
      <button onClick={playAgain}>Play again</button>
    </div>
  )
}

export default Gameover