import React, { useState } from 'react';
import { TextField } from '@mui/material'

import useStyles from './styles';

const Task10 = () => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const borderColor = () => {
    if (inputValue.length <= 4 || inputValue.length >= 9) {
      return 'red';
    }
    return 'green';
  }

  return (
    <div className={classes.root}>
      <TextField className={borderColor()} onChange={handleChange} />
    </div>
  );
};

export default Task10;
