import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  TextField,
  Typography,
} from '@mui/material';

import useStyles from './style';

const TableOFWorkers = ({ workers, handleInputValue, onBlur, showInput, inputValue }) => {
  const classes = useStyles();
  console.log(inputValue)
  return (
    <Box className={classes.root}>
      <Table className={classes.tableSection}>
        <TableHead sx={{ fontWeight: '700' }}>
          <TableRow >
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Pay rate</TableCell>
            <TableCell>Days of worked</TableCell>
            <TableCell>Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workers.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>
                {
                  !item.payRate.isShowInput ?
                    (<TextField
                      name='payRate'
                      value={inputValue}
                      type='number'
                      sx={{ width: '110px' }}
                      onBlur={() => onBlur(item.id, 'payRate')}
                      onChange={handleInputValue}
                      placeholder='pay rate'
                    />) : (
                      <Typography onClick={() => showInput(item.id, 'payRate')}>{item.payRate.value}</Typography>)
                }
              </TableCell>
              <TableCell>
                {
                  !item.dayOfWorked.isShowInput ? (
                    <TextField
                      name='dayOfWorked'
                      value={inputValue}
                      type='number'
                      onBlur={() => onBlur(item.id, 'dayOfWorked')}
                      sx={{ width: '110px' }}
                      onChange={handleInputValue}
                      placeholder='days'
                    />
                  ) : (
                    <Typography onClick={() => showInput(item.id, 'dayOfWorked')}>{item.dayOfWorked.value}</Typography>)
                }

              </TableCell>
              <TableCell> {item.payRate.value * item.dayOfWorked.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TableOFWorkers;
