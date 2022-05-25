import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Box,
  Checkbox,
} from '@mui/material';

import useStyles from './style';

const TableOfFructs = ({ fruits, deleteElement, handleCheckbox }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Table className={classes.tableSection}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>Name</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Price of one</TableCell>
            <TableCell colSpan={0}>Price of all</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fruits.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Checkbox checked={item.isChecked} onChange={() => handleCheckbox(item.id)} />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>{item.priceOfOne}</TableCell>
              <TableCell>{item.priceOfOne * item.count}</TableCell>
              <TableCell>
                <Button onClick={() => deleteElement(index)} variant="contained">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TableOfFructs;
