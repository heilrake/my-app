import React, { useState } from 'react';

import { Checkbox, TextField } from '@mui/material'

import useStyles from './styles';

const Task12 = () => {
  const classes = useStyles();

  const [checkValue, setCheckValue] = useState(false);

  const handleChange = () => {
    setCheckValue(!checkValue);
  }

  return (
    <div className={classes.root}>
      <Checkbox onChange={handleChange} />
      <TextField sx={{ margin: '20px 0px' }}
        variant="outlined"
        disabled={checkValue}
      />
    </div >
  );
};

export default Task12;
