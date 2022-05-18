import React, { useState } from 'react';

import { TextField } from '@mui/material';

import useStyles from './styles';


const Task1 = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('')

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }


  return (
    <div>
      <TextField
        className={classes.root}
        multiline
        value={inputValue}
        onChange={handleInput}
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default Task1;
