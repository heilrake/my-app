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


const TableOFWorkers = ({ workers, handleInputValue, onBlur, showInput, inputValue, tableNames }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Table className={classes.tableSection}>
        <TableHead sx={{ fontWeight: '700' }}>
          <TableRow >
            {
              tableNames.map((item, index) => <TableCell key={index}>{item}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {workers.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>
                {
                  item.payRate.isShowInput ?
                    (<Typography onClick={() => showInput(item.id, 'payRate')}>
                      {item.payRate.value}
                    </Typography>
                    ) : (
                      <TextField
                        name='payRate'
                        value={inputValue.payRate.value}
                        type='number'
                        sx={{ width: '110px' }}
                        onBlur={() => onBlur(item.id, 'payRate')}
                        onChange={handleInputValue}
                        placeholder='pay rate'
                      />
                    )
                }
              </TableCell>
              <TableCell>
                {
                  item.dayOfWorked.isShowInput ? (
                    <Typography onClick={() => showInput(item.id, 'dayOfWorked')}>
                      {item.dayOfWorked.value}
                    </Typography>
                  ) : (
                    <TextField
                      name='dayOfWorked'
                      value={inputValue.dayOfWorked.value}
                      type='number'
                      onBlur={() => onBlur(item.id, 'dayOfWorked')}
                      sx={{ width: '110px' }}
                      onChange={handleInputValue}
                      placeholder='days'
                    />
                  )
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
