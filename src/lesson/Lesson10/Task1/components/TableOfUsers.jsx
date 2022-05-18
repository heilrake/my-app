import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/mat

const TableOfUsers = ({ users, showAllert }) => {
  return (
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
              <TableCell>{users.firstName}</TableCell>
              <TableCell>{users.lastName}</TableCell>
              <TableCell>{users.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableOfUsers;
