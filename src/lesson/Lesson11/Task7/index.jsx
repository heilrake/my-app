import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import CreateTask from './CreateTask';
import Task from './Task';

import { TASKS } from '../../../services/mock-tasks';

import 'react-calendar/dist/Calendar.css';
import useStyles from './style';

const Lesson = () => {
  const classes = useStyles();

  const [tasks, setTasks] = useState([...TASKS]);
  const [selectValueDate, setSelectValueDate] = useState(new Date());
  const [selectTask, setSelectTask] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [editInputValue, setEditInputValue] = useState('')

  const showTasks = () => {
    const month = selectValueDate.getMonth();
    const day = selectValueDate.getDate();
    const years = selectValueDate.getFullYear();

    const result = tasks.find((item) => item.day === day && item.month === month + 1 && item.year === years);
    setSelectTask(result);
  };

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleEditInput = (event) => {
    setEditInputValue(event.target.value);
  };

  const createTask = (event) => {
    event.preventDefault();

    const copyTasks = [...tasks];

    if (inputValue !== '') {
      copyTasks.push({
        id: copyTasks.length + 1,
        day: selectValueDate.getDate(),
        month: selectValueDate.getMonth() + 1,
        year: selectValueDate.getFullYear(),
        task: [
          {
            id: copyTasks.length + 1 - copyTasks.length,
            isChecked: false,
            value: inputValue,
            isAdditable: false,
          }
        ]
      });
      setTasks(copyTasks);
    }
    setInputValue('');
  };

  const addTask = (event, selectTask) => {
    event.preventDefault();

    const copyTasks = [...tasks];

    if (selectTask && inputValue !== '') {
      selectTask.task.push({
        id: selectTask.task.length + 1,
        isChecked: false,
        value: inputValue,
        isAdditable: false,
      });
      setTasks(copyTasks);
    }
    setInputValue('');
  };

  const deleteTask = (selectId, index) => {
    const copyTasks = [...tasks];

    copyTasks[selectId - 1].task.splice(index, 1);
    setTasks(copyTasks)
  };

  const editTask = (selectId, index) => {
    const copyTasks = [...tasks];

    copyTasks[selectId - 1].task[index].isAdditable = !copyTasks[selectId - 1].task[index].isAdditable;

    setTasks(copyTasks);
    setEditInputValue(copyTasks[selectId - 1].task[index].value);
  };

  const isDisabledEditButton = (selectTask) => {
    const result = selectTask.find((item) => item.isAdditable);

    if (result)
      return true

    return false
  };

  const saveTask = (selectId, index,) => {
    const copyTasks = [...tasks];

    if (editInputValue !== '' || copyTasks[selectId - 1].task[index].isAdditable) {
      copyTasks[selectId - 1].task[index].value = editInputValue;
      copyTasks[selectId - 1].task[index].isAdditable = !copyTasks[selectId - 1].task[index].isAdditable;

      setTasks(copyTasks);
      setEditInputValue('');
    }
  };

  const handleChangeCheckBox = (selectId, index) => {
    const copyTasks = [...tasks];

    if (!copyTasks[selectId - 1].task[index].isAdditable) {
      copyTasks[selectId - 1].task[index].isChecked = !copyTasks[selectId - 1].task[index].isChecked;
      setTasks(copyTasks);
    }
  };

  useEffect(() => {
    showTasks();
    setIsLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectValueDate, tasks]);

  return (
    <Box className={classes.root}>
      <Calendar onChange={setSelectValueDate} value={selectValueDate} />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box>
          {selectTask ? (
            <Task
              selectTask={selectTask}
              addTask={addTask}
              saveTask={saveTask}
              editTask={editTask}
              deleteTask={deleteTask}
              inputValue={inputValue}
              editInputValue={editInputValue}
              handleInput={handleInput}
              handleEditInput={handleEditInput}
              handleChangeCheckBox={handleChangeCheckBox}
              isDisabledEditButton={isDisabledEditButton}
            />
          ) : (
            <CreateTask
              createTask={createTask}
              inputValue={inputValue}
              handleInput={handleInput}
            />
          )}
        </Box>
      )}
    </Box >
  );
};

export default Lesson;
