import React, { useState } from 'react';

import AddTask from './AddTask';
import Task from './Task';

import useStyles from './style';

const Lesson = () => {
  const classes = useStyles();

  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState({ nameOfTask: '', description: '' });
  const [editInputValue, setEditInputValue] = useState({ nameOfTask: '', description: '' });

  const handleChangeField = ({ target: { name, value } }) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
    setEditInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const editTask = (id, field, event) => {
    console.log(field);
    const copyTodoList = [...todoList];
    const itemIndex = copyTodoList.findIndex((item) => item.id === id);

    copyTodoList[itemIndex][field].isAdditable = !copyTodoList[itemIndex][field].isAdditable;

    setInputValue((prevState) => ({
      ...prevState,
      [field]: copyTodoList[itemIndex][field].value
    }));
    setTodoList(copyTodoList);
  };

  const isDisabledEditButton = ({ id, nameOfTask, description }) => {
    const copyTodoList = [...todoList];
    const result = copyTodoList.find((item) => item.nameOfTask.isAdditable || item.description.isAdditable);

    if (result && !(nameOfTask.isAdditable || description.isAdditable) && !(result.id === id)) {
      return true
    }
    return false
  };

  const onBlur = (id, field) => {
    const copyTodoList = [...todoList];
    const result = copyTodoList.find((item) => item.id === id);

    if (inputValue[field] !== '' || !result[field].isAdditable) {

      result[field].value = inputValue[field];
      result[field].isAdditable = !result[field].isAdditable;

      setTodoList(copyTodoList);
      setInputValue({
        nameOfTask: '', description: ''
      });
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
      nameOfTask: { value: data.name, isAdditable: false }, description: {
        value: data.description, isAdditable: false
      }, id: todoList.length, isChecked: false,
    });

    setTodoList(copyTodoList);
  };

  const handleChangeCheckBox = (id) => {
    const copyTodoList = [...todoList];
    const result = copyTodoList.find((task) => task.id === id);

    if (!result.nameOfTask.isAdditable && !result.description.isAdditable) {
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
