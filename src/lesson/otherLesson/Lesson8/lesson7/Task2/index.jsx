import React, { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';



import useStyles from './styles';


const Task3 = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div>
      <Checkbox {...label} checked={checked} onChange={() => setChecked(!checked)} />
      <p>{checked ? ' on' : ' off'}</p>
    </div>
  );
};

export default Task3;
