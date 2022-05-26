import React, { useState } from 'react';

import Answers from './Answers'
import ArrowButtons from './ArrowButtons';
import { Button } from 'antd';

import useStyles from './style';

const QUESTIONS = [
  {
    name: 'What is name Patric',
    answers: [
      { id: 1, text: 'Bob' },
      { id: 2, text: 'Nick' },
      { id: 3, text: 'Patric' },
      { id: 4, text: 'Bagdad' },
    ],
    right: 'Patric',
    answer: ''
  },
  {
    name: 'Cherkassy is ...',
    answers: [
      { id: 1, text: 'city', },
      { id: 2, text: 'village', },
    ],
    right: 'city',
    answer: ''
  },
  {
    name: 'The capital of Ukraine',
    answers: [
      { id: 1, text: 'London' },
      { id: 2, text: 'Kiev' },
      { id: 3, text: 'Berlin' },
      { id: 4, text: 'Los Angeles' },
      { id: 5, text: 'Kharkiv' },
    ],
    right: 'Kiev',
    answer: ''
  },
];

const Lesson = () => {
  const classes = useStyles();
  const [questions, setQuestions] = useState([...QUESTIONS]);

  const [countPage, setCountPage] = useState(0);
  const [isShowQuestions, setIsShowQuestions] = useState(true);

  const handlePage = (value) => {
    setCountPage(value)
  };

  const sliceWorkers = () => {
    const slice = 1;

    const copyQuestions = [...questions];
    const result = [];

    for (let s = 0, e = slice; s < copyQuestions.length; s += slice, e += slice)
      result.push(copyQuestions.slice(s, e));

    return result[countPage];
  };

  const handleChangeAnswer = (answerId) => {
    const copyQuestions = [...questions];

    copyQuestions[countPage].answer = answerId;
    setQuestions(copyQuestions);
  };

  const colorText = (id) => {
    const copyQuestions = [...questions];

    if (copyQuestions[id].answer === copyQuestions[id].right)
      return 'green';
    return 'red';
  };



  return (
    <div className={classes.root}>
      {isShowQuestions ?
        <div> {
          sliceWorkers().map((item, index) => (
            <div key={index}>
              <Answers
                handleChangeAnswer={handleChangeAnswer}
                item={item}
                index={index}
              />
            </div>
          ))
        }
          <ArrowButtons
            handlePage={handlePage}
            countPage={countPage}
          /> </div> :
        <div>{
          questions.map((item, index) => (
            <div index={index}>
              <div>Your answer <p className={colorText(index)}>{item.answer}</p></div>
              <p>True answer {item.right}</p>
            </div>
          ))
        }
        </div>
      }
      <Button onClick={() => setIsShowQuestions(!isShowQuestions)}>
        {isShowQuestions ? 'Check Answers' : ' Try again'}
      </Button>
    </div >
  );
};

export default Lesson;
