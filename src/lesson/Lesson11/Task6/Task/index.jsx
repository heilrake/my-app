
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
                {!item.name.isAdditable ? (
                  <p>{item.name.name}</p>
                ) : (
                  <TextField
                    label='edit name'
                    name='name'
                    value={inputValue.name}
                    onChange={handleChangeField}
                    onBlur={() => onBlur(item.id, 'name')}
                  />
                )
                }
                {!item.isChecked &&
                  <Button sx={{ color: 'black' }} onClick={() => editTask(item.id, 'name')}>
                    <EditIcon />
                  </Button>
                }
              </Box>
              <Box className={classes.editField}>
                {!item.description.isAdditable ? (
                  <p>{item.description.name}</p>
                ) : (
                  <TextField
                    label='edit description '
                    name='description'
                    value={inputValue.description}
                    onChange={handleChangeField}
                    onBlur={() => onBlur(item.id, 'description')}
                  />
                )
                }
                {!item.isChecked &&
                  <Button sx={{ color: 'black' }} onClick={() => editTask(item.id, 'description')}>
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
