import React from 'react';

import { useForm } from 'react-hook-form';
import { TextField, Box, Button } from '@mui/material';

import useStyles from './style';

const AddTask = ({ addTask }) => {
  const classes = useStyles();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      description: '',
      id: null,
    }
  });

  const clearInput = () => {
    reset({
      name: '',
      description: null,
      id: null
    })
  };

  const onSubmit = (data) => {
    addTask(data);
    clearInput();
  };

  return (
    <Box className={classes.root}>
      <p className={classes.title}>Add task</p>
      <form className={classes.formSection} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("name", { required: true })}
          placeholder='Name of task'
          variant="standard"
        />
        <TextField
          {...register("description", { required: true })}
          placeholder='Description'
          defaultValue=''
          variant="standard"
        />
        <Button variant="contained" type='submit'>Add task</Button>
      </form>
    </Box>
  );
};

export default AddTask;
