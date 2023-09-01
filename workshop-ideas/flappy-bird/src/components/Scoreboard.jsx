import React from 'react';

const Scoreboard = ({ score }) => {
  const scoreboardStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '24px',
    color: 'white',
  };

  return <div style={scoreboardStyle}>Score: {score}</div>;
};

export default Scoreboard;
