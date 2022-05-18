import React, { useState } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import useStyles from './styles';

const Task9 = () => {
  const classes = useStyles();

  const [workers, setWorkers] = useState([
    { id: 1, lastName: 'Kvochko', firstName: 'Misha', salary: 1300 },
    { id: 2, lastName: 'Daviduch', firstName: 'Erick', salary: 1700 },
    { id: 3, lastName: 'Jonhson', firstName: 'Bob', salary: 900 },
    { id: 4, lastName: 'Usyk', firstName: 'Alex', salary: 1100 },
    { id: 5, lastName: 'Gorpinko', firstName: 'Igor', salary: 1300 },
    { id: 6, lastName: 'Dyppina', firstName: 'Ann', salary: 1300 },
  ]);


  const sortOnAscendingSalary = () => {
    const copyWorkers = [...workers];
    copyWorkers.sort((a, b) => a.salary >= b.salary ? 1 : -1);
    setWorkers(copyWorkers);
  }
  const sortOnDescendingSalary = () => {
    const copyWorkers = [...workers];
    copyWorkers.sort((a, b) => a.salary >= b.salary ? -1 : 1);
    setWorkers(copyWorkers);
  }
  const sortOnAscendingName = () => {
    const copyWorkers = [...workers];
    copyWorkers.sort((a, b) => a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1)
    setWorkers(copyWorkers)
  }
  const sortOnDesAscendingName = () => {
    const copyWorkers = [...workers];
    copyWorkers.sort((a, b) => a.firstName.toLowerCase() < b.firstName.toLowerCase() ? 1 : -1)
    setWorkers(copyWorkers)
  }

  const sortOnAscendingLastName = () => {
    const copyWorkers = [...workers];
    copyWorkers.sort((a, b) => a.lastName.toLowerCase() < b.lastName.toLowerCase() ? -1 : 1)
    setWorkers(copyWorkers)
  }
  const sortOnDesAscendingLastName = () => {
    const copyWorkers = [...workers];
    copyWorkers.sort((a, b) => a.lastName.toLowerCase() < b.lastName.toLowerCase() ? 1 : -1)
    setWorkers(copyWorkers)
  }

  return (
    <div className={classes.root}>
      <TableContainer>
        <Table sx={{ width: '750px', margin: '0px auto' }}>
          <TableHead>
            <TableRow>
              <TableCell>First Name
                <Button size='small' onClick={sortOnAscendingName} variant="contained"><ArrowUpwardIcon /></Button>
                <Button size='small' onClick={sortOnDesAscendingName} variant="contained"><ArrowDownwardIcon /> </Button>
              </TableCell>
              <TableCell >Last Name
                <Button size='small' onClick={sortOnAscendingLastName} variant="contained"><ArrowUpwardIcon /></Button>
                <Button size='small' onClick={sortOnDesAscendingLastName} variant="contained"><ArrowDownwardIcon /> </Button>
              </TableCell>
              <TableCell>Salary
                <Button size='small' onClick={sortOnAscendingSalary} variant="contained"><ArrowUpwardIcon /></Button>
                <Button size='small' onClick={sortOnDescendingSalary} variant="contained"><ArrowDownwardIcon /> </Button>
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
                    {item.salary}
                  </TableCell>
                </TableRow>
              ))
            }

          </TableBody>
        </Table>
      </TableContainer>

    </div>

  );
};

export default Task9;
