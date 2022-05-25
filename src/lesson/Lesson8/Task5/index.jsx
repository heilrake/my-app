import React, { useState } from 'react';

import { List, ListItem, Typography } from '@mui/material'
import useStyles from './styles';

const Task5 = () => {
  const classes = useStyles();

  const [items, setItems] = useState([
    { name: 'Коля', id: 1, isChecked: false },
    { name: 'Вася', id: 2, isChecked: false },
    { name: 'Петя', id: 3, isChecked: true },
  ]);
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {

    setInputValue(event.target.value)
  }

  const BlurXyi = (id) => {
    if (inputValue !== '') {
      const copyItems = [...items];

      const result = copyItems.find((item) => item.id === id);

      result.isChecked = !result.isChecked
      result.name = inputValue;
      setItems(copyItems);
      setInputValue('');
    };
  }

  const showInput = (id) => {

    const copyItems = [...items];

    const result = copyItems.find((item) => item.id === id)
    result.isChecked = !result.isChecked

    setItems(copyItems);

  }

  return (
    <div className={classes.root}>
      {items.map((item, index) => (
        <List key={index}>
          <ListItem >
            {item.isChecked ?
              <Typography onClick={() => showInput(item.id)} >{item.name}</Typography>
              : <input onChange={handleChange} onBlur={() => BlurXyi(item.id)} />}
          </ListItem>
        </List>
      ))}
    </div >
  );
};

export default Task5;

// blur
