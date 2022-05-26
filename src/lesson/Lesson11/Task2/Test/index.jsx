import React from 'react';
import useStyles from './style';

import { Typography, Button, Input } from 'antd';
const { Title } = Typography;

const Test = ({ questions, answerValue, textColor, onCheck, handleChangeInputValue }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {questions.map((item, index) => (
        <div key={index}>
          <Title level={2}>{item.name}</Title>
          {item.isShow ? (
            <p className={textColor(item.id)}>
              Ваш ответ {answerValue(item.id)}
            </p>
          ) : (
            <Input
              placeholder='your answer'
              onChange={(event) => handleChangeInputValue(event, index)}
              style={{ width: '300px', margin: '10px 0px' }}
            />)
          }
          <Button
            type="primary"
            style={{ margin: "0px 10px" }}
            onClick={() => onCheck(item.id)}
          >
            {item.isShow ? 'Try again' : 'Check answer'}
          </Button>
        </div>
      ))
      }
    </div>
  );
};

export default Test;
