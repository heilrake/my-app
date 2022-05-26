import React from 'react';

import { Radio } from 'antd';
import useStyles from './style';

const Answers = ({ item, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>{item.name} </p>
      <Radio.Group
        onChange={onChange} >

        {item.answers.map((answer, index) => (

          <Radio
            key={index}
            value={answer.id}
            label={answer.text}
          >
            {answer.text}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

export default Answers;
