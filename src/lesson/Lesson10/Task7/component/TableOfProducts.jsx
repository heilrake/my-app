
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';

const TableOfProducts = ({ products, deleteElement }) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell > </TableCell>
            <TableCell >Name</TableCell>
            <TableCell>Count</TableCell>
            <TableCell >Price of one</TableCell>
            <TableCell >Price of all</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Button onClick={() => deleteElement(index)} variant="contained"> Delete</Button >
              </TableCell>
              <TableCell> {item.name}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>{item.priceOfOne}</TableCell>
              <TableCell>
                {item.priceOfOne * item.count}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableOfProducts;
