import React from 'react';

import { Radio } from 'antd';
import useStyles from './style';

const Answers = ({ questions, handleChangeAnswer }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>{questions.name} </p>
      <Radio.Group>
        {questions.answers.map((answer, answerIndex) => (
          <Radio
            onChange={() => handleChangeAnswer(answer.text)}
            key={answerIndex}
            value={answer.text}
          >
            {answer.text}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

export default Answers;
