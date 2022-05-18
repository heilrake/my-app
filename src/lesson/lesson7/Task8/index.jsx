import React, { useState } from 'react';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useStyles from './styles';
import { Typography } from '@mui/material';
import classNames from 'classnames';

const COLORS = [
  {
    id: 1,
    color: 'red'
  },
  {
    id: 2,
    color: 'grey'
  },
  {
    id: 3,
    color: 'blue'
  },
  {
    id: 4,
    color: 'green'
  },
]

const Task8 = () => {
  const classes = useStyles();

  const [inputValue, setValue] = useState(3);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const filterColors = () => {
    const result = COLORS.find((color) => color.id === inputValue).color;

    return result
  }

  return (
    <div className={classes.root}>
      <Box sx={{ minWidth: 120 }}>
        <InputLabel>Color</InputLabel>
        <Select
          value={inputValue}
          onChange={handleChange}
        >
          {COLORS.map((color, index) => <MenuItem value={color.id} key={index}>{color.color}</MenuItem>)}
        </Select>
        <Typography className={classNames(classes.typography, filterColors())}>bog</Typography>
      </Box>
    </div>
  );
};

export default Task8;
