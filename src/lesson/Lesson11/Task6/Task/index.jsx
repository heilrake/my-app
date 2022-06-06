
import React from 'react';
import classNames from 'classnames';

import { Box, Button, Checkbox, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import useStyle from './style';
const Task = ({
  todoList,
  deleteTask,
  handleChangeCheckBox,
  handleChangeField,
  editTask,
  inputValue,
  isDisabledEditButton,
  onBlur }) => {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <p className={classes.title}>Tasks</p>
      <Box>
        {todoList.map((item, index) => (
          <Box key={index}>
            <Box className={classNames(classes.task, { 'noactive': item.isChecked })}>
              <Checkbox
                onChange={() => handleChangeCheckBox(item.id)}
                checked={item.isChecked}
              />
              <Box className={classes.editField}>
                {item.nameOfTask.isAdditable ? (
                  <TextField
                    label='Edit name'
                    name='nameOfTask'
                    autoFocus
                    value={inputValue.nameOfTask}
                    onChange={handleChangeField}
                    onBlur={() => onBlur(item.id, 'nameOfTask')}
                  />
                ) : (
                  <p>{item.nameOfTask.value}</p>
                )}
                {!item.isChecked && !item.nameOfTask.isAdditable ? (
                  <Button disabled={isDisabledEditButton(item)}
                    sx={{ color: 'black' }}
                    onClick={() => editTask(item.id, 'nameOfTask')}
                  >
                    <EditIcon />
                  </Button>
                ) : (
                  ''
                )}
              </Box>
              <Box className={classes.editField}>
                {item.description.isAdditable ? (
                  <TextField
                    label='Edit description '
                    name='description'
                    autoFocus
                    value={inputValue.description}
                    onChange={handleChangeField}
                    onBlur={() => onBlur(item.id, 'description')}
                  />
                ) : (
                  <p>{item.description.value}</p>
                )}
                {!item.isChecked && !item.description.isAdditable ? (
                  < Button disabled={isDisabledEditButton(item)}
                    sx={{ color: 'black' }}
                    onClick={() => editTask(item.id, 'description')}
                  >
                    <EditIcon />
                  </Button>
                ) : (
                  ''
                )
                }
              </Box>
              {!item.isChecked &&
                <Box>
                  <Button sx={{ color: 'black' }} onClick={() => deleteTask(index)}>
                    <DeleteIcon />
                  </Button>
                </Box>
              }
            </Box>
          </Box>
        ))
        }
      </Box >
    </Box >
  );
};

export default Task;
