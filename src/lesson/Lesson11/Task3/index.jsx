import React, { useState } from 'react';
import { Button } from 'antd';

import Answers from './Answers';
import ArrowButtons from './ArrowButtons';

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
    setCountPage(value);
  };

  const handleChangeAnswer = (answerId) => {
    const copyQuestions = [...questions];

    copyQuestions[countPage].answer = answerId;
    setQuestions(copyQuestions);
  };

  const getColorText = (id) => {
    if (questions[id].answer === questions[id].right)
      return 'correct';

    return 'incorrect';
  };

  const disableButton = () => {
    return questions.find(item =>
      item.answer === ''
    )
  };

  const showAnswers = () => {
    const copyQuestions = [...questions];

    if (!isShowQuestions) {
      copyQuestions.forEach(element => {
        element.answer = ''
      })
      setQuestions(copyQuestions);
    }

    setCountPage(0);
    setIsShowQuestions(!isShowQuestions);
  };

  return (
    <div className={classes.root}>
      {isShowQuestions ?
        (
          <div>
            <Answers
              handleChangeAnswer={handleChangeAnswer}
              questions={questions[countPage]}
            />
            <ArrowButtons
              handlePage={handlePage}
              countPage={countPage}
            />
          </div>
        ) : (
          <div>
            {questions.map((item, index) => (
              <div style={{ margin: '25px 0px' }} key={index}>
                <p>Your answer is</p>
                <p className={getColorText(index)}>
                  {item.answer}
                </p>
                <p>True answer is {item.right}</p>
              </div>
            ))
            }
          </div>
        )
      }
      {isShowQuestions ?
        <Button disabled={disableButton()} onClick={() => showAnswers()}>
          Check Answers
        </Button> :
        <Button onClick={() => showAnswers()}>
          Try again
        </Button>
      }
    </div >
  );
};

export default Lesson;
