import React from 'react';

const Pipe = ({ x, height, isTop }) => {
  const pipeStyle = {
    position: 'absolute',
    width: '60px',
    height: `${height}px`,
    backgroundColor: 'green',
    transform: `translate(${x}px, ${isTop ? 0 : '100%'})`,
    transition: 'transform 0.2s ease',
  };

  return <div style={pipeStyle}></div>;
};

export default Pipe;
