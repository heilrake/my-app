import React, { useState } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'

import useStyles from './styles';


const Task16 = () => {
  const classes = useStyles();

  const [questions, setQuestions] = useState([
    {
      name: 'Вопрос 1',
      answers: [
        { id: 1, text: 'Ответ1' },
        { id: 2, text: 'Ответ2' },
        { id: 3, text: 'Ответ3' },
        { id: 4, text: 'Ответ4' },
        { id: 5, text: 'Ответ5' },
      ],
      right: 3,
      answer: null
    },
    {
      name: 'Вопрос 2',
      answers: [
        { id: 1, text: 'Ответ21', isTrue: false },
        { id: 2, text: 'Ответ22', isTrue: false },
        { id: 3, text: 'Ответ23', isTrue: false },
        { id: 4, text: 'Ответ24', isTrue: false },
        { id: 5, text: 'Ответ25', isTrue: false },
      ],
      right: 4,
      answer: null
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
      right: 2,
      answer: null
    },
  ]);

  const handleChangeAnswer = (questionIndex, answerId) => {
    const copyQuestions = [...questions];

    copyQuestions[questionIndex].answer = answerId;
    setQuestions(copyQuestions);
  };

  const getStatusClassName = (rightAnswer, currentAnswer, answerId) => {
    if (rightAnswer === currentAnswer && currentAnswer === answerId) {
      return "correct";
    }

    if (currentAnswer === answerId) {
      return "false";
    }

    return "default";
  }

  return (
    <div className={classes.root}>
      {questions.map((item, index) => (
        <RadioGroup key={index}>
          <p>{item.name}</p>
          {item.answers.map((answer, answerIndex) => (
            <FormControlLabel
              className={getStatusClassName(item.right, item.answer, answer.id)}
              onChange={() => handleChangeAnswer(index, answer.id)}
              key={answerIndex}
              value={answer.id}
              control={<Radio />}
              label={answer.text}
            />
          ))}
        </RadioGroup>
      ))}
    </div >
  );
};

export default Task16;
