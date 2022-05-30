import React from 'react';

import { Checkbox } from 'antd';
import useStyles from './style';

const Answers = ({ questions, handleChangeAnswer }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>{questions.name} </p>
      <Checkbox.Group>
        {questions.answers.map((answer, answerIndex) => (
          <Checkbox
            onChange={(event) => handleChangeAnswer(answer.text, event, answerIndex)}
            key={answerIndex}
            value={answer.text}
          >
            {answer.text}
          </Checkbox >
        ))}
      </Checkbox.Group>
    </div >
  );
};

export default Answers;
