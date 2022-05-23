import React from 'react';

import { TextField, Box, Button } from '@mui/material';
import { useForm } from "react-hook-form";

import useStyles from './style/style';

const AddElementToTable = ({ addElement }) => {
  const classes = useStyles();

  const { register, getValues, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      count: null,
      priceOfOne: null,
    }
  });

  const getBorderColor = (name) => {
    if (errors[name]) {
      return 'red';
    }
    return
  };



  return (
    <div>
      <Box className={classes.root}>
        <p>Add product</p>
        <form onSubmit={handleSubmit(addElement)}>
          <TextField
            {...register("name", { required: true })}
            placeholder='name'
            className={getBorderColor('name')}
          />
          <TextField
            {...register("count", { required: true })}
            placeholder='count'
            type='number'
            defaultValue=''
            className={getBorderColor('count')}
          />
          <TextField
            {...register("priceOfOne", { required: true })}
            placeholder='price of one'
            type='number'
            className={getBorderColor('priceOfOne')}
          />
          <Button variant="contained" type='submit'>Add product</Button>
        </form>
      </Box>
    </div>
  );
};

export default AddElementToTable;
