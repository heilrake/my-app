import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Select, MenuItem, InputLabel, Button } from '@mui/material'


import useStyles from './styles';

const Task12 = () => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState({ lastName: '', firstName: '', sex: '', salary: null })
  const [workers, setWorkers] = useState([
    { id: 1, lastName: 'Kvochko', firstName: 'Misha', sex: "Men", salary: 1300 },
    { id: 2, lastName: 'Daviduch', firstName: 'Erick', sex: "Men", salary: 1700 },
    { id: 3, lastName: 'Jonhson', firstName: 'Bob', sex: "Men", salary: 900 },
    { id: 4, lastName: 'Usyk', firstName: 'Alex', sex: "Men", salary: 1100 },
    { id: 5, lastName: 'Gorpinko', firstName: 'Igor', sex: "Men", salary: 1300 },
    { id: 6, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 1300 },
  ]);
  const handleInput = ({ target: { name, value } }) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }))
  }
  const addElement = (event) => {
    event.preventDefault();

    const copyNames = [...workers];
    if (inputValue.firstName && inputValue.lastName && inputValue.salary && inputValue.sex !== '') {
      copyNames.push(inputValue);
      setWorkers(copyNames);
    }

    setInputValue({ lastName: '', firstName: '', sex: '', salary: '' });
  }

  return (
    <div className={classes.root}>
      <TableContainer>
        <Table sx={{ width: '750px', margin: '20px auto' }}>
          <TableHead>
            <TableRow>
              <TableCell>First Name
              </TableCell>
              <TableCell >Last Name
              </TableCell>
              <TableCell>Sex
              </TableCell>
              <TableCell>Salary
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              workers.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {item.firstName}
                  </TableCell>
                  <TableCell>
                    {item.lastName}
                  </TableCell>
                  <TableCell>
                    {item.sex}
                  </TableCell>
                  <TableCell>
                    {item.salary}
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <form onSubmit={addElement}>
        <TextField name='lastName' onChange={handleInput} sx={{ margin: "0px 5px" }} label="Second Name" />
        <TextField name='firstName' onChange={handleInput} sx={{ margin: "0px 5px" }} label="First Name" />

        <TextField name='salary' onChange={handleInput} sx={{ margin: "0px 5px" }} label="Salary" />
        <Box sx={{ margin: '20px 0px' }}>
          <InputLabel>Select sex</InputLabel>
          <Select
            name='sex'
            onChange={handleInput}
            label='Sex'>
            <MenuItem value='Men'>Men</MenuItem>
            <MenuItem value='Girl' >Girl</MenuItem>
            <MenuItem value='Man'>Man</MenuItem>

          </Select >
        </Box>
        <Button variant="contained" type="submit" >ADD</Button>
      </form>

    </div>
  );
};

export default Task12;
