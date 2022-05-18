import React, { useState } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import useStyles from './styles';

const Task6 = () => {
  const classes = useStyles();

  const [items, setItems] = useState([
    {
      id: 1,
      name: {
        lable: 'Коля',
        isAdditable: false,
      },
      age: {
        lable: 12,
        isAdditable: false,
      },
    },
    {
      id: 2,
      name: {
        lable: 'Ваня',
        isAdditable: false,
      },
      age: {
        lable: 129,
        isAdditable: false,
      },
    },
    {
      id: 3,
      name: {
        lable: 'Вася',
        isAdditable: false,
      },
      age: {
        lable: 2,
        isAdditable: false,
      },
    },
  ]);

  const [inputValue, setInputValue] = useState({ name: '', age: '' });

  const handleChange = ({ target: { name, value } }) => {

    setInputValue((prevState) => ({ ...prevState, [name]: value }))

  }

  const onCheck = (id, field) => {
    const copyItems = [...items];

    const result = copyItems.find((item) => item.id === id);
    console.log(inputValue)
    console.log(result);
    if (inputValue[field] !== '' || !result[field].isAdditable) {
      result[field].lable = inputValue[field];
      result[field].isAdditable = !result[field].isAdditable;

      setItems(copyItems);

      setInputValue({ name: '', age: '' });
    }
  }
  console.log(inputValue);
  return (
    <div className={classes.root}>
      <TableContainer >
        <Table sx={{ width: '650px', margin: '0px auto' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell >
                    {!item.name.isAdditable ?
                      <p> {item.name.lable}</p>
                      : <input placeholder='Name'
                        name="name"
                        value={inputValue.name.lable}
                        onChange={handleChange} />}
                    <Button size='small' onClick={() => onCheck(item.id, 'name')} variant="contained">Edit</ Button>
                  </TableCell>
                  <TableCell>
                    {!item.age.isAdditable ?
                      <p> {item.age.lable}</p>
                      : <input
                        placeholder='Age'
                        type='number'
                        value={inputValue.name.lable}
                        name="age" onChange={handleChange} />}
                    <Button onClick={() => onCheck(item.id, 'age')} variant="contained">Edit</ Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer >
    </div >
  );
};

export default Task6;



//field
