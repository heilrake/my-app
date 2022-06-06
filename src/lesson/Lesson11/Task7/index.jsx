import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { TextField, Button } from '@mui/material';


import 'react-calendar/dist/Calendar.css';

const TASKS = [
  {
    id: 1,
    day: 3,
    month: 6,
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
  //const [inShowTask, setInShowTask] = useState(false);

  const showTasks = () => {


    // setInShowTask(!inShowTask);
  };

  const addTask = () => {
    const copyTasks = [...tasks];
    console.log(value);
    //copyTasks.unshift(task: )
  };

  const onChangeCalendar = (data) => {
    const month = value.getMonth();
    const day = value.getDate();
    const years = value.getFullYear();

    const result = tasks.find((item) => item.day === day && item.month === month + 1 && item.year === years);

    setSelectDate(result);
    onChange(data)
  };

  console.log(selectDate);
  return (
    <div>
      <Calendar onChange={onChangeCalendar} value={value} />
      {
        selectDate ? (
          <div > {
            selectDate.task.map((item, index) => (
              <p key={index}> {item}</p>
            ))
          }</div>
        ) : (
          <div>
            <form onSubmit={addTask}>
              <p>На сьогоднішню дату завдань немає </p>
              <TextField size="small" label='Create task' />
              <Button type='submit' variant="contained">Create</Button>
            </form>
          </div>
        )
      }
    </div >
  );
};

export default Lesson;
