import React, { useState } from 'react';
import { Select, Button, TextField, MenuItem, Box, InputLabel } from '@mui/material'



import useStyles from './styles';

const Task14 = () => {
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState('');
  const [sity, setSity] = useState([])

  const [inputValue, setInputValue] = useState('');

  const addElement = (event) => {
    event.preventDefault();

    const copySities = [...sity];

    if (inputValue !== '') {
      copySities.push(inputValue)
      setSity(copySities);

    }

    setInputValue('');
  }
  const handleInput = (event) => {
    setInputValue(event.target.value)
  }
  const handleSelect = (event) => {
    setSelectValue(event.target.value)
  }

  return (
    <div className={classes.root}>
      <Box>
        <InputLabel>Select sity</InputLabel>
        <Select
          label='sity'
          onChange={handleSelect}>
          {
            sity.map((item, index) => (

              <MenuItem key={index} value={item} >{item}</MenuItem>
            ))
          }
        </Select>
      </Box>

      <form onSubmit={addElement}>
        < TextField value={inputValue} label='sity' onChange={handleInput} />
        <Button variant='contained' type='submit'>ADD</Button>
      </form>
      <p>{selectValue}</p>
    </div>
  );
};

export default Task14;
