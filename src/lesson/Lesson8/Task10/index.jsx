import React, { useState } from 'react';

import { Box, InputLabel, MenuItem, Select } from '@mui/material'

import useStyles from './styles';

const LANGUAGES = ['English', 'Russian'];
const ENG_DAYS = ['Monday', 'Thuesday', 'Wensday', 'Thursday', 'Friday', 'Sunday', 'Saturday'];
const RUS_DAYS = ['Понедельник', 'Вторник', 'Cреда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const Task10 = () => {
  const classes = useStyles();

  const [languageValue, setLanguageValue] = useState(LANGUAGES[0]);
  const [dayValue, setDayValue] = useState(ENG_DAYS[0]);

  const handleChangeLanguage = (event) => {
    setLanguageValue(event.target.value);
    setDayValue(event.target.value === LANGUAGES[0] ? ENG_DAYS[0] : RUS_DAYS[0]);
  };

  const handleChangeDay = (event) => {
    setDayValue(event.target.value);
  };

  return (
    <Box className={classes.root}>
      <Box sx={{ minWidth: 120 }}>
        <InputLabel>Select</InputLabel>
        <Select
          onChange={handleChangeLanguage}
          label='Languages'
          value={languageValue}
        >
          {LANGUAGES.map((item, index) => (
            <MenuItem value={item} key={index}>{item}</MenuItem>
          ))}
        </Select >
        <Select
          label='Days'
          onChange={handleChangeDay}
          value={dayValue}
        >
          {(languageValue === LANGUAGES[0] ? ENG_DAYS : RUS_DAYS).map((item, index) => (
            <MenuItem value={item} key={index}>{item}</MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default Task10;
