import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material'


import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';



import useStyles from './styles';
import classNames from 'classnames';

const Task13 = () => {
  const classes = useStyles();

  const [countPage, setCountPage] = useState(0)
  const [workers, setWorkers] = useState([
    { id: 1, lastName: 'Kvochko', firstName: 'Misha', sex: "Men", salary: 1300 },
    { id: 2, lastName: 'Daviduch', firstName: 'Erick', sex: "Men", salary: 1700 },
    { id: 3, lastName: 'Jonhson', firstName: 'Bob', sex: "Men", salary: 900 },
    { id: 4, lastName: 'Usyk', firstName: 'Alex', sex: "Men", salary: 1100 },
    { id: 5, lastName: 'Gorpinko', firstName: 'Igor', sex: "Men", salary: 1300 },
    { id: 6, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 13010 },
    { id: 7, lastName: 'Hyper', firstName: 'Illua', sex: "Girl", salary: 13300 },
    { id: 8, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 13020 },
    { id: 9, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 13001 },
    { id: 10, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 11300 },
    { id: 11, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 11300 },
    { id: 12, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 11300 },
    { id: 13, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 13800 },
    { id: 14, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 11300 },
    { id: 15, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 13060 },
    { id: 16, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 13200 },
    { id: 17, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 132500 },
    { id: 18, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 13200 },
    { id: 19, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 11300 },
    { id: 20, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 13100 },
    { id: 21, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 11300 },
    { id: 22, lastName: 'Dyppina', firstName: 'Ann', sex: "Girl", salary: 13100 },
  ]);

  const handlePage = (value) => {
    setCountPage(value)
  }

  console.log(countPage)
  const sliceWorkers = () => {
    const slice = 10;

    const copyWorkers = [...workers];
    const result = [];

    for (let s = 0, e = slice; s < copyWorkers.length; s += slice, e += slice)
      result.push(copyWorkers.slice(s, e));

    return result[countPage];
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
              sliceWorkers().map((item, index) => (
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
      <Box>
        <IconButton disabled={countPage === 0} onClick={() => handlePage(countPage - 1)}><ArrowBackIcon /></IconButton>
        <IconButton variant='contained' onClick={() => handlePage(0)}>
          <LooksOneIcon className={classNames({ 'blue': countPage === 0 })} >1</LooksOneIcon>
        </IconButton>
        <IconButton sx={{ margin: '0px 5px' }} variant='contained' onClick={() => handlePage(1)}>
          <LooksTwoIcon className={classNames({ 'blue': countPage === 1 })} >2</LooksTwoIcon>
        </IconButton>
        <IconButton variant='contained' onClick={() => handlePage(2)}>
          <Looks3Icon
            className={classNames({ 'blue': countPage === 2 })}> 3</Looks3Icon>
        </IconButton>
        <IconButton disabled={countPage >= 2} onClick={() => handlePage(countPage + 1)}><ArrowForwardIcon /></IconButton>
      </Box>
    </div >
  );
};

export default Task13;
