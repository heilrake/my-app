import React, { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useStyles from './styles';

const Task4 = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">sity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            value={value}
            onChange={handleChange}
          >
            <MenuItem value=' Kiev'>Kiev</MenuItem>
            <MenuItem value='Cherkassy'>Cherkassy</MenuItem>
            <MenuItem value=' Obama'>Obama</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <p>{value}</p>

    </div>
  );
};

export default Task4;
