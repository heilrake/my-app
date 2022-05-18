import React, { useState } from 'react';

import { Box, InputLabel, MenuItem, Select } from '@mui/material'

import useStyles from './styles';

const Task10 = () => {
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState([
    {
      id: 1,
      value: 'first',
    },
    {
      id: 2,
      value: 'second',
    },
    {
      id: 3,
      value: 'third',
    },
    {
      id: 4,
      value: 'four',
    },
  ]);
  const [selectValueNew, setSelectValueNew] = useState(null);

  const handleSelectValue = (event) => {
    setSelectValueNew(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Box sx={{ minWidth: 120 }}>
        <InputLabel>select</InputLabel>
        <Select
          value={selectValue}
          onChange={handleSelectValue}
        >
          {selectValue.map((item, index) => (
            <MenuItem key={index} value={item.value}>{item.value}</MenuItem>
          ))}
        </Select >
      </Box>
      <p>{selectValueNew}</p>
    </div >
  );
};

export default Task10;
