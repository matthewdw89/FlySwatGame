import React from 'react'


const CompleteLevel = ({ nextlevel }) => {
  
  return (
    <div className="compelete__level">
      <h1>Level Complete</h1>
      <button onClick={nextlevel}>Start Next Level</button>
    </div>
  )
}

export default CompleteLevel