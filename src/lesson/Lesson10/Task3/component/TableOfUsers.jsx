import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
} from '@mui/material';

const TableOfUsers = ({ users, showMessage }) => (
  <div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Last name</TableCell>
          <TableCell colSpan='2'>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.firstName}</TableCell>
            <TableCell>{item.lastName}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell><Link href='#' onClick={() => showMessage(item.firstName)}>Click me!</Link ></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default TableOfUsers;
