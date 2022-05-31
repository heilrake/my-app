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
    right: ['Patric', 'Bob'],
    answer: [],
  },
  {
    name: 'Cherkassy is ...',
    answers: [
      { id: 1, text: 'city', },
      { id: 2, text: 'village', },
    ],
    right: ['city'],
    answer: [],
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
    right: ['Kiev', 'Kharkiv'],
    answer: [],
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

  const sliceQuestions = () => {
    const slice = 1;

    const copyQuestions = [...questions];
    const result = [];

    for (let s = 0, e = slice; s < copyQuestions.length; s += slice, e += slice)
      result.push(copyQuestions.slice(s, e));

    return result[countPage];
  };

  const handleChangeAnswer = (answerId, event, answerIndex) => {
    const copyQuestions = [...questions];

    if (event.target.checked) {
      copyQuestions[countPage].answer.push(answerId);
    }
    else {
      copyQuestions[countPage].answer.splice(answerIndex, 1);
    }
    setQuestions(copyQuestions);
  };


  const getcolorText = (indexQuestion, item) => {
    const copyQuestions = [...questions];

    const result = copyQuestions[indexQuestion].right.includes(item);

    return result;
  };

  const disableButton = () => {
    return questions.find(item => item.answer.length === 0);
  };

  const showResults = () => {
    const copyQuestions = [...questions];

    if (!isShowQuestions) {
      copyQuestions.forEach(item => {
        item.answer = [];
      })
    }
    setIsShowQuestions(!isShowQuestions);
  };

  return (
    <div className={classes.root}>
      {isShowQuestions ?
        (
          <div> {
            sliceQuestions().map((item, index) => (
              <div key={index}>
                <Answers
                  handleChangeAnswer={handleChangeAnswer}
                  questions={item}
                />
              </div>
            ))
          }
            <ArrowButtons
              handlePage={handlePage}
              countPage={countPage}
            />
          </div>
        ) : (
          <div>
            {questions.map((item, indexQuestion) => (
              <div className={classes.Result} key={indexQuestion}>
                <div className={classes.AnswersResult}>
                  <p>Your answer is</p>
                  {item.answer.map((item, indexAnswer) => (
                    <div key={indexAnswer} >
                      <p
                        className={getcolorText(indexQuestion, item) ? 'right' : 'noRight'}
                      >
                        {item}
                      </p>
                    </div>
                  ))
                  }
                </div>
                <div className={classes.AnswersResult}>
                  <p>True answer is</p>
                  {item.right.map((item, indexQuestionRight) => (
                    <div key={indexQuestionRight}>
                      <p>
                        {item}
                      </p>
                    </div>
                  ))
                  }
                </div>
              </div>
            ))
            }
          </div>
        )
      }
      <Button disabled={disableButton()} onClick={showResults}>
        {isShowQuestions ? 'Check Answers' : ' Try again'}
      </Button>
    </div >
  );
};

export default Lesson;
