import React, { useState } from 'react';

import Test from './Test';

const QUESTIONS = [
  {
    id: 1,
    name: "Capital of Greate Britan ?",
    rightAnswer: "london",
    answer: '',
    isShow: false,
  },
  {
    id: 2,
    name: "Capital of Ukraine ?",
    rightAnswer: "kiev",
    answer: '',
    isShow: false,
  },
  {
    id: 3,
    name: "Capital of France ?",
    rightAnswer: "paris",
    answer: '',
    isShow: false,
  },
];

const Lesson = () => {
  const [questions, setQuestions] = useState([...QUESTIONS]);
  const [inputValue, setInputValue] = useState('');

  const onCheck = (id) => {
    if (inputValue !== '') {
      const copyQuestions = [...questions];

      const result = copyQuestions.find((item) => item.id === id);

      result.isShow = !result.isShow;
      setQuestions(copyQuestions);
      setInputValue(inputValue);
    }
  };

  const handleChangeInputValue = (event, id) => {
    const copyQuestions = [...questions];
    copyQuestions[id].answer = event.target.value.toLowerCase();

    setInputValue(event.target.value);
    setQuestions(copyQuestions);
  };

  const answerValue = (id) => {
    const copyQuestions = [...questions];
    let answer = null;

    const result = copyQuestions.find((item) => item.id === id);

    if (result.isShow) {
      if (result.answer === result.rightAnswer) {
        answer = 'правильно';
      } else {
        answer = 'неправильно';
      }

      return `${result.answer} ${answer}`;
    }
  };

  const textColor = (id) => {
    const copyQuestions = [...questions];

    const result = copyQuestions.find((item) => item.id === id);
    if (result.answer === result.rightAnswer)
      return 'green';

    return 'red';
  };

  return (
    <div>
      <Test
        questions={questions}
        inputValue={inputValue}
        answerValue={answerValue}
        onCheck={onCheck}
        handleChangeInputValue={handleChangeInputValue}
        textColor={textColor}
      />
    </div>
  );
};

export default Lesson;
