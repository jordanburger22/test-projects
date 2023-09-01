import React from 'react';

const Bird = ({ birdY }) => {
  const birdStyle = {
    position: 'absolute',
    width: '40px',
    height: '30px',
    backgroundColor: 'blue',
    borderRadius: '50%',
    transform: `translateY(${birdY}px)`,
    transition: 'transform 0.2s ease',
  };

  return <div style={birdStyle}></div>;
};

export default Bird;
