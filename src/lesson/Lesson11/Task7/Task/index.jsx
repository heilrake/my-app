import React from 'react';
import classNames from 'classnames';
import { Box, Button, TextField, Checkbox } from '@mui/material';

import useStyles from './style';

const Task = ({
  selectTask,
  addTask,
  deleteTask,
  inputValue,
  editInputValue,
  handleInput,
  handleChangeCheckBox,
  handleEditInput,
  saveTask,
  editTask,
  isDisabledEditButton,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {selectTask.task.map((item, index) => (
        <Box className={classes.infoWrapper} key={index}>
          <Box className={classes.mainInfo}>
            <Box className={classes.info}>
              <Checkbox
                onChange={() => handleChangeCheckBox(selectTask.id, index)}
                checked={item.isChecked}
              />
              {item.isAdditable ? (
                <TextField
                  label='Edit task'
                  name='edit'
                  value={editInputValue}
                  autoFocus
                  onChange={handleEditInput}
                />
              ) : (
                <p className={classNames(classes.checkTask, { 'noactive': item.isChecked })}>
                  {item.value}
                </p>
              )}
            </Box>
            <Box className={classes.buttonGroup}>
              {(item.isChecked || !item.isAdditable) ? (
                <Button
                  onClick={() => editTask(selectTask.id, index)}
                  disabled={isDisabledEditButton(selectTask.task)}
                  variant="contained"
                >
                  Edit
                </Button>
              ) : (
                <Box className={classes.buttonGroup}>
                  <Button
                    variant="contained"
                    onClick={() => saveTask(selectTask.id, index)}
                  >
                    Save
                  </Button>
                  <Box className={classes.deleteButton}>
                    <Button
                      onClick={() => deleteTask(selectTask.id, index)}
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      ))}
      <form onSubmit={(event) => addTask(event, selectTask)}>
        <p>{!selectTask.task ? 'Add task' : 'Create task'}</p>
        <TextField
          sx={{ margin: '0 5px' }}
          size="small" label='Add task'
          value={inputValue}
          onChange={handleInput}
        />
        <Button sx={{ margin: '0 5px' }} type='submit' variant="contained">
          Add task
        </Button>
      </form>
    </Box>
  );
};

export default Task;
