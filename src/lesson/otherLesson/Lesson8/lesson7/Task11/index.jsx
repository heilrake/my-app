import React, { useState } from 'react';

import { Box, InputLabel, MenuItem, Select, Button, TextField } from '@mui/material'

import useStyles from './styles';

const Task11 = () => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');
  const [select, setSelect] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  const addElement = () => {
    const copySelect = [...select];

    copySelect.push(inputValue);

    setSelect(copySelect);
  }
  return (
    <div className={classes.root}>

      <TextField sx={{ margin: '20px 0px' }}
        variant="outlined"
        onChange={handleChange}
      />
      <Button variant="contained" onClick={addElement}>Add element</Button>
      <Box sx={{ minWidth: 120 }}>
        <InputLabel>select</InputLabel>
        <Select
          value={select}
        >
          {select.map((item, index) => (
            <MenuItem value={item} key={index}>{item}</MenuItem>
          ))}
        </Select >
      </Box>
    </div >
  );
};

export default Task11;
