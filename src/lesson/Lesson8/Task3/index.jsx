import React, { useState } from 'react';

import { Checkbox } from '@mui/material'
import useStyles from './styles';

const ITEMS = [
  {
    id: 1,
    name: 'mike',
    isChecked: false
  },
  {
    id: 2,
    name: 'bob',
    isChecked: false
  },
  {
    id: 3,
    name: 'jonh',
    isChecked: false
  },
]

const Task3 = () => {
  const classes = useStyles();

  const [items, setItems] = useState([...ITEMS]);

  const handleChange = (id) => {
    const copyItem = [...items];

    const result = copyItem.find((item) => item.id === id);

    result.isChecked = !result.isChecked;

    setItems(copyItem);
  }

  return (
    <div className={classes.root}>
      {
        items.map((item, index) => (
          <ul key={index}>
            <li>
              {item.isChecked === true ? item.name : ' '}</li>
            <Checkbox checked={item.isChecked} onChange={() => handleChange(item.id)} />
          </ul>
        ))
      }

    </div >
  );
};

export default Task3;
