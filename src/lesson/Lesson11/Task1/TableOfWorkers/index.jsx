import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  TextField,
} from '@mui/material';

import useStyles from './style';

const TableOFWorkers = ({ workers, handleInputValue, onBlur }) => {
  const classes = useStyles();

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
                  item.isChecked ?
                    (<TextField
                      name='payRate'
                      value={item.payRate}
                      type='number'
                      sx={{ width: '110px' }}
                      onBlur={() => onBlur(item.id)}
                      onChange={handleInputValue}
                      placeholder='pay rate'
                    />) : (
                      <p>{item.payRate}</p>)
                }
              </TableCell>
              <TableCell>
                <TextField
                  name='days'
                  value={item.dayOfWorked}
                  type='number'
                  onBlur={() => onBlur(item.id)}
                  sx={{ width: '110px' }}
                  onChange={handleInputValue}
                  placeholder='days'
                />
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TableOFWorkers;
