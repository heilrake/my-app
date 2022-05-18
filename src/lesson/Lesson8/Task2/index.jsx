import React, { useState } from 'react';

import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import useStyles from './styles';

const WORKERS = [
  {
    id: 1,
    lastname: 'Kvochko',
    firstname: 'Misha',
    secondname: 'Romanovich',
    payday: 1000,
    isChecked: false
  },
  {

    id: 2,
    lastname: 'Bober',
    firstname: 'Bob',
    secondname: 'Bobvich',
    payday: 900,
    isChecked: false
  },
  {
    id: 3,
    lastname: 'Sikor',
    firstname: 'Igor',
    secondname: 'Ruslanovich',
    payday: 300,
    isChecked: false
  },
]

const Task2 = () => {
  const classes = useStyles();

  const [workers, setWorkers] = useState([...WORKERS]);


  const handleChange = (id) => {
    const copyWorkers = [...workers];

    const result = copyWorkers.find((product) => product.id === id);

    result.isChecked = !result.isChecked;

    setWorkers(copyWorkers);
  }

  const getSumPayday = () => {

    let sum = 0;

    workers.forEach(element => {
      if (element.isChecked === true) {
        sum += element.payday
      }
    }
    )
    return sum;
  };

  return (
    <div className={classes.root}>

      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: '100 %' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell >Full name</TableCell>
              <TableCell >PayDay</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              workers.map((workers, index) => (
                <TableRow

                  key={index}>
                  <TableCell><Checkbox checked={workers.isChecked}
                    onChange={() => handleChange(workers.id)} /></TableCell>
                  <TableCell>{workers.lastname + ' ' + workers.firstname + ' ' + workers.secondname}</TableCell>
                  <TableCell>{workers.payday}</TableCell>
                </TableRow>

              ))
            }

          </TableBody>
        </Table>
      </TableContainer>

      <p>{getSumPayday()}</p>
    </div >
  );
};

export default Task2;
