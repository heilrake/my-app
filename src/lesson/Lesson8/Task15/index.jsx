import React, { useState } from 'react';
import { Select, Button, TextField, MenuItem, Box, InputLabel } from '@mui/material'
import useStyles from './styles';


const CURRENCY = [
  { id: 1, name: 'USD', value: 1 },
  { id: 2, name: 'UAH', value: 0.0339 },
  { id: 3, name: 'EUR', value: 0.95 },
  { id: 4, name: 'RUB', value: 0.0121 }];

const Task15 = () => {
  const classes = useStyles();

  const [selectValueWith, setSelectValueWith] = useState(1);
  const [selectValueTo, setSelectValueTo] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [resultConvert, setResultConvert] = useState(null)


  const handleInput = (event) => {

    setInputValue(event.target.value)
  }
  const handleSelectWith = (event) => {

    setSelectValueWith(event.target.value);
  }
  const handleSelectTo = (event) => {
    setSelectValueTo(event.target.value)
  }

  const Convertaion = (event) => {
    event.preventDefault();

    const withValue = CURRENCY.find((item) => item.id === selectValueWith);
    const toValue = CURRENCY.find((item) => item.id === selectValueTo);

    const resultConvert = (((inputValue / toValue.value) / 1) * withValue.value).toFixed(2);

    setResultConvert(resultConvert);
    setInputValue('')
  }

  return (
    <div className={classes.root}>
      <form onSubmit={Convertaion}>
        < TextField value={inputValue} type='number' label='Value' onChange={handleInput} />
        <Box>
          <InputLabel>Конвертація </InputLabel>
          <Select
            sx={{ margin: "0px 5px" }}
            label='With'
            value={selectValueWith}
            onChange={handleSelectWith}
          >
            {CURRENCY.map((item, index) => (
              <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
            ))}

          </Select>
          <Select
            sx={{ margin: "0px 5px" }}
            label='To'
            value={selectValueTo}
            onChange={handleSelectTo}>
            {CURRENCY.map((item, index) => (
              <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
            ))}
          </Select>
        </Box>
        <Button variant='contained' type='submit'>Сonversion</Button>
      </form>
      <p> {resultConvert ? `Результат: ${resultConvert} ` : ' '}</p>
    </div >
  );
};

export default Task15;
