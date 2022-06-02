import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { TextField, Button } from '@mui/material';


import 'react-calendar/dist/Calendar.css';

const TASKS = [
  {
    id: 1,
    day: 3,
    month: 11,
    year: 2022,
    task: [' Crate Box machine 1']
  },
  {
    id: 2,
    day: 4,
    month: 6,
    year: 2022,
    task: [' Crate Box machine 2 ', ' fsdf']
  },
  {
    id: 3,
    day: 5,
    month: 6,
    year: 2022,
    task: [' Crate Box machine 3 ']
  },
  {
    id: 4,
    day: 6,
    month: 6,
    year: 2022,
    task: [' Crate Box machine 4 ']
  },
  {
    id: 5,
    day: 7,
    month: 6,
    year: 2022,
    task: [' Crate Box machine 5 ']
  },
];

const Lesson = () => {
  const [tasks, setTasks] = useState([...TASKS]);
  const [value, onChange] = useState(new Date());
  const [selectDate, setSelectDate] = useState();
  const [inShowTask, setInShowTask] = useState(false);

  const showTasks = () => {
    const month = value.getMonth();
    const day = value.getDate();
    const years = value.getFullYear();

    const result = tasks.find((item) => item.day === day && item.month === month + 1 && item.year === years)
    if (result)
      setSelectDate(result.task);

    setInShowTask(!inShowTask);
  };

  const addTask = () => {


  };

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <Button variant="contained" onClick={showTasks}>Show task</Button>
      {
        inShowTask ?
          selectDate ? (
            <div > {
              selectDate.map((item, index) => (
                <p key={index}> {item}</p>
              ))
            }</div>
          ) : (
            <div>
              <form onSubmit={addTask}>
                <p>На сьогоднішню дату завдань немає </p>
                <TextField />
                <Button type='submit' variant="contained">Створити</Button>
              </form>
            </div>
          )
          : ''
      }

    </div >
  );
};

export default Lesson;
