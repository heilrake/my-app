import React, { useState } from 'react';

import AddTask from './AddTask';
import Task from './Task';

import useStyles from './style';

const Lesson = () => {
  const classes = useStyles();

  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState({ name: '', description: '' });
  const [editInputValue, setEditInputValue] = useState({ name: '', description: '' });

  const handleChangeField = ({ target: { name, value } }) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const editTask = (id, field) => {
    const copyTodoList = [...todoList];
    const result = copyTodoList.find((item) => item.id === id);
    result[field].isAdditable = !result[field].isAdditable;

    setTodoList(copyTodoList);
  };

  const isDisabledEditButton = ({ id, name, description }) => {
    const copyTodoList = [...todoList];
    const result = copyTodoList.find((item) => item.name.isAdditable || item.description.isAdditable);

    if (result && !(name.isAdditable || description.isAdditable) && !(result.id === id)) {
      return true
    }

    return false
  };

  const onBlur = (id, field) => {
    const copyTodoList = [...todoList];
    const result = copyTodoList.find((item) => item.id === id);

    if (inputValue[field] !== '' || !result[field].isAdditable) {

      result[field].name = inputValue[field];
      result[field].isAdditable = !result[field].isAdditable;

      setTodoList(copyTodoList);
      setInputValue({ lable: '', description: '' });
    }
  };

  const deleteTask = (id) => {
    const copyTodoList = [...todoList];

    copyTodoList.splice(id, 1);

    setTodoList(copyTodoList);
  };

  const addTask = (data) => {
    const copyTodoList = [...todoList];

    copyTodoList.unshift({
      name: { lable: data.name, isAdditable: false }, description: {
        lable: data.description, isAdditable: false
      }, id: todoList.length, isChecked: false,
    });

    setTodoList(copyTodoList);
  };

  const handleChangeCheckBox = (id) => {
    const copyTodoList = [...todoList];
    const result = copyTodoList.find((task) => task.id === id);

    if (!result.name.isAdditable && !result.description.isAdditable) {
      result.isChecked = !result.isChecked;
      setTodoList(copyTodoList);
    }
  };

  return (
    <div className={classes.root}>
      <AddTask
        todoList={todoList}
        addTask={addTask}
      />
      {todoList.length !== 0 &&
        <Task
          isDisabledEditButton={isDisabledEditButton}
          onBlur={onBlur}
          inputValue={inputValue}
          editInputValue={editInputValue}
          editTask={editTask}
          todoList={todoList}
          deleteTask={deleteTask}
          handleChangeCheckBox={handleChangeCheckBox}
          handleChangeField={handleChangeField}
        />
      }
    </div>
  );
};

export default Lesson;
