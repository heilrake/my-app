
import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';

import useStyles from '../style/style';

const TableOfProducts = ({ products, deleteElement }) => {
  const classes = useStyles();
  return (
    <Table className={classes.root}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Count</TableCell>
          <TableCell>Price of one</TableCell>
          <TableCell colSpan={0}>Price of all</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.count}</TableCell>
            <TableCell>{item.priceOfOne}</TableCell>
            <TableCell>{item.priceOfOne * item.count}</TableCell>
            <TableCell>
              <Button onClick={() => deleteElement(index)} variant="contained">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableOfProducts;
