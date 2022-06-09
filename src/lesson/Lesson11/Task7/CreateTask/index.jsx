import React from 'react';
import { TextField, Button, Box } from '@mui/material';

import useStyles from './style';

const AddTask = ({ createTask, inputValue, handleInput }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <form onSubmit={createTask}>
        <p>Create task </p>
        <TextField
          sx={{ margin: '0 5px' }}
          size="small" label='Create task'
          value={inputValue}
          onChange={handleInput}
        />
        <Button sx={{ margin: '0 5px' }} type='submit' variant="contained">
          Create task
        </Button>
      </form>
    </Box>
  );
};

export default AddTask;
