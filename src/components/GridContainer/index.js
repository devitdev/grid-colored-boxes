import React, {useState} from 'react';
import Box from "../Box";

const GridContainer = () => {

  //initial colors state, get from task description via color picker
  const [colors, setColors] = useState([
    '#0089E0', '#E64758',
    '#8C7A5B', '#B85E61',
    '#8459CB', '#47B2A0',
    '#307A67', '#6E6BFA',
    '#475C6D'
  ]);

  //simple shuffle array function
  const shuffleColor = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  //this function provided for each item
  const clickHandler = () => {
    const shuffleColors = shuffleColor(colors)
    setColors(prevState => [...shuffleColors])
  }

  return (
    <main>
      <div className="block__top">
        {
          colors.map((color, index) => {
            if (index < 4) {
              return <Box key={index} color={color} shuffleClick={clickHandler} text={index + 1} classes={`item${index + 1}`} />
            }
          })
        }
      </div>
      <div className="block__bottom">
        {
          colors.map((color, index) => {
            if (index > 3) {
              return <Box key={index} color={color} shuffleClick={clickHandler} text={index + 1} classes={`item${index + 1}`} />
            }
          })
        }
      </div>
    </main>
  );
};

export default GridContainer;