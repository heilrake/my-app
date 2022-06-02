
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
  editInputValue,
  editTask,
  inputValue,
  isDisabledEditButton,
  onBlur }) => {
  const classes = useStyle();

  console.log(editInputValue);

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
                {!item.name.isAdditable ? (
                  <p>{item.name.lable}</p>
                ) : (
                  <TextField
                    label='Edit name'
                    name='name'
                    value={inputValue.lable}
                    onChange={handleChangeField}
                    onBlur={() => onBlur(item.id, 'name')}
                  />
                )
                }
                {!item.isChecked &&
                  <Button disabled={isDisabledEditButton(item)} sx={{ color: 'black' }} onClick={() => editTask(item.id, 'name')}>
                    <EditIcon />
                  </Button>
                }
              </Box>
              <Box className={classes.editField}>
                {!item.description.isAdditable ? (
                  <p>{item.description.lable}</p>
                ) : (
                  <TextField
                    label='Edit description '
                    name='description'
                    value={editInputValue.description}
                    onChange={handleChangeField}
                    onBlur={() => onBlur(item.id, 'description')}
                  />
                )
                }
                {!item.isChecked &&
                  <Button disabled={isDisabledEditButton(item)} sx={{ color: 'black' }} onClick={() => editTask(item.id, 'description')}>
                    <EditIcon />
                  </Button>
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
    </Box>
  );
};

export default Task;
