import React, { useState } from 'react';

import { Checkbox, List, ListItem } from '@mui/material'
import useStyles from './styles';

const Task4 = () => {
  const classes = useStyles();

  const [items, setItems] = useState([
    { name: 'Коля', surname: 'Иванов', age: 30, isChecked: false, id: 1 },
    { name: 'Вася', surname: 'Петров', age: 40, isChecked: false, id: 2 },
    { name: 'Петя', surname: 'Сидоров', age: 50, isChecked: false, id: 3 },
  ]);

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
          <List key={index} sx={{ display: 'flex ' }}>
            <ListItem >
              <Checkbox checked={item.isChecked} onChange={() => handleChange(item.id)} />
              {item.isChecked === true ? item.name + ' ' + item.surname + ' ' + item.age : item.name}</ListItem>
          </List>
        ))
      }

    </div >
  );
};

export default Task4;
