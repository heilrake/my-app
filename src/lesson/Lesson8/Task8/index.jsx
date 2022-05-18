import React, { useState } from 'react';

import { Box, TextField, Button } from '@mui/material'
import useStyles from './styles';

const Task8 = () => {
  const classes = useStyles();

  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputValueEdit, setInputValueEdit] = useState('');
  const [notesCounter, setNotesCounter] = useState(0);



  const handleChange = (event) => {
    console.log(event.target.value)
    setInputValue(event.target.value);

  };
  const handleChangeEdit = (event) => {
    setInputValueEdit(event.target.value);
  }

  const addPost = () => {
    if (inputValue !== '') {
      const copyNotes = [...notes];
      const dateCreate = new Date().toUTCString();

      copyNotes.push({ id: notesCounter + 1, text: inputValue, date: dateCreate, isChange: false });

      setNotes(copyNotes);
      setNotesCounter(notesCounter + 1);
    }
    setInputValue('');
  }
  const deletePost = (index) => {
    const copyNotes = [...notes];

    copyNotes.splice(index, 1);
    setNotes(copyNotes);
  }
  const changePost = (id) => {

    const copyNotes = [...notes];

    const result = copyNotes.find((item) => item.id === id);
    console.log(result.text)

    result.isChange = !result.isChange;
    result.text = inputValueEdit;

    setNotes(copyNotes)


  }

  return (
    <div className={classes.root}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }} >
        <TextField onChange={handleChange} sx={{ width: '450px' }} id="outlined-basic" multiline label="Notes" variant="outlined" />
        <Button onClick={addPost} variant="contained">Add post</Button>
      </Box>
      <div>{notes &&
        notes.map((item, index) => (
          <div>
            <p>Номер поста - {item.id}</p>
            <div>{
              !item.isChange ?
                <p>{item.text}</p> :
                <TextField onChange={handleChangeEdit} variant='outlined' />
            }</div>
            <div>{item.date}</div>
            <Button onClick={() => deletePost(index)} variant="contained">Delete post</Button>
            <Button onClick={() => changePost(item.id)} variant='contained'>{item.isChange ? ' Save' : 'Edit'}</Button>
          </div>
        ))}</div>
    </div >

  );
};

export default Task8;
