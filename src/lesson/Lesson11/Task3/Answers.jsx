import React from 'react';

import { Radio } from 'antd';
import useStyles from './style';

const Answers = ({ item, index, handleChangeAnswer }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>{item.name} </p>
      <Radio.Group>
        {item.answers.map((answer, answerIndex) => (
          <Radio
            onChange={() => handleChangeAnswer(answer.text)}
            key={answerIndex}
            value={answer.id}
          >
            {answer.text}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

export default Answers;
