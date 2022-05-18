import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const TableOfUsers = ({ data }) => (
  <div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Last name</TableCell>
          <TableCell>age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.firstName}</TableCell>
            <TableCell>{item.lastName}</TableCell>
            <TableCell>{item.age}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>

);

export default TableOfUsers;
