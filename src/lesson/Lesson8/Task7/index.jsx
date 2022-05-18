import React, { useState } from 'react';

import { Radio, FormControl, RadioGroup, FormControlLabel } from '@mui/material'
import useStyles from './styles';

const Task7 = () => {
  const classes = useStyles();

  const [routes, setRoutes] = useState([
    { id: 1, name: 'Cherkassy to kiev ' },
    { id: 2, name: 'Cherkassy to Lviv' },
    { id: 3, name: 'Kiev to Paris' }
  ]);
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl>
        <RadioGroup
          onChange={handleChange}
        >
          {
            routes.map((item, index) => (
              < FormControlLabel key={index} value={item.name} control={<Radio />} label={item.name} />
            ))
          }
        </RadioGroup>
      </FormControl>
      <p> {inputValue ? `Choise : ${inputValue}` : ''}</p>
    </div >
  );
};

export default Task7;



//field
