import React, { useState } from 'react';

import { TextField } from '@mui/material';

import useStyles from './styles';

const Task7 = () => {
  const classes = useStyles();

  const [inputValue, setValue] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addValue = (event) => {
    event.preventDefault();

    const copyValue = [...items];

    copyValue.push(inputValue);

    setItems(copyValue);
    setValue('')
  }

  return (
    <div className={classes.root}>
      <TextField
        className={classes.root}
        multiline
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={addValue}>add</button>
      {items.map((item, index) =>
        <p key={index}>{item}</p>
      )}
    </div>
  );
};

export default Task7;
