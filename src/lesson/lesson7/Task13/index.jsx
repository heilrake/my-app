import React, { useState } from 'react';

import { Box, InputLabel, MenuItem, Select } from '@mui/material'

import useStyles from './styles';

const Task13 = () => {
  const classes = useStyles();

  const [day, setDay] = useState();
  const [mounth, setMounth] = useState();
  const [year, setYear] = useState();
  const [fullDate, setFullDate] = useState();

  const changeDate = () => {

  };

  return (
    <div className={classes.root}>
      <Box>
        <InputLabel>Day</InputLabel>
        <Select value={day}>
          <MenuItem />
        </Select>
        <InputLabel>Mounth</InputLabel>
        <Select value={mounth}>
          <MenuItem />
        </Select>
        <InputLabel>Year</InputLabel>
        <Select value={year}>
          <MenuItem />
        </Select>
      </Box>
    </div >
  );
};

export default Task13;
