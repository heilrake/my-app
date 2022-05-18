import React, { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useStyles from './styles';

const Task5 = () => {
  const classes = useStyles();
  const [sity, setSity] = useState(['Kiev', 'Cherkassy', 'Chikago']);

  const handleChange = (event) => {
    setSity(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            value={sity}
            onChange={handleChange}
          >
            {sity.map((item, index) => (
              <MenuItem value={item} key={index}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <p>{sity}</p>

    </div>
  );
};

export default Task5;
