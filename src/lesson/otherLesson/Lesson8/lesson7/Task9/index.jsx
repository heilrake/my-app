import React, { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import useStyles from './styles';


const Task9 = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  const handleSelectChange = (event) => {
    setChecked(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <Box sx={{ minWidth: 120 }}>
        <InputLabel>select</InputLabel>
        <Select
          value={checked}
          onChange={handleSelectChange}
        >
          <MenuItem value={true}>Отмечено</MenuItem>
          <MenuItem value={false}>Не отмечено</MenuItem>
        </Select >

      </Box>
      <Checkbox checked={checked} onChange={handleCheckboxChange} />
    </div >
  );
};

export default Task9;
