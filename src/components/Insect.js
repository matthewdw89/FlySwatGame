import React, { Component } from 'react';

const Insect = ({alive, hit, id, style}) => {

  let bugImg= alive ? 'alive' : 'dead'; 
  return (
      <div onClick={() => { hit(id) }} style={style} id={bugImg}>
          <img src={alive ? './images/bug2.png' : './images/bug2Dead.svg'} alt="Bug"/>
      </div>
  )
};

export default Insect;
