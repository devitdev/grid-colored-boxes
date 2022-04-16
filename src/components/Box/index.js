import React from 'react';

//simple item
//props classes need for grid layout
//background color insert with inline styles
const Box = ({color, text, shuffleClick, classes}) => {
  return <div className={classes} onClick={shuffleClick} style={{backgroundColor: `${color}`}}>{text}</div>
};

export default Box;
