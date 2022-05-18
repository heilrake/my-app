import React, { useState } from 'react';
import { Select, Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import useStyles from './styles';



const Task16 = () => {
  const classes = useStyles();
  const [question, setQuestion] = useState([
    {
      name: 'Вопрос 1',
      answers: [
        { id: 1, text: 'Ответ1' },
        { id: 2, text: 'Ответ2' },
        { id: 3, text: 'Ответ3' },
        { id: 4, text: 'Ответ4' },
        { id: 5, text: 'Ответ5' },
      ],
      right: 3, //номер правильного ответа
    },
    {
      name: 'Вопрос 2',
      answers: [
        { id: 1, text: 'Ответ21' },
        { id: 2, text: 'Ответ22' },
        { id: 3, text: 'Ответ23' },
        { id: 4, text: 'Ответ24' },
        { id: 5, text: 'Ответ25' },
      ],
      right: 4, //номер правильного ответа
    },
    {
      name: 'Вопрос 3',
      answers: [
        { id: 1, text: 'Ответ31' },
        { id: 2, text: 'Ответ32' },
        { id: 3, text: 'Ответ33' },
        { id: 4, text: 'Ответ34' },
        { id: 5, text: 'Ответ35' },
      ],
      right: 2, //номер правильного ответа
    },
  ])

  console.log(question[0].answers[1].text);
  return (
    <div className={classes.root}>
      <RadioGroup>
        {
          question.map((item, index) => (
            console.log(index),
            < FormControlLabel key={index} value={item.answers[index].text} control={< Radio />} label={item.answers[index].text} />
          ))
        }
      </RadioGroup>
    </div >
  );
};

export default Task16;
