import React, { useState } from 'react';
//import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';


import Answers from './Answers'

const QUESTIONS = [
  {
    name: 'What is name Patric',
    answers: [
      { id: 1, text: 'Bob' },
      { id: 2, text: 'Nick' },
      { id: 3, text: 'Patric' },
      { id: 4, text: 'Bagdad' },
    ],
    right: 3,
    answer: null
  },
  {
    name: 'Cherkassy is ...',
    answers: [
      { id: 1, text: 'city', },
      { id: 2, text: 'village', },
    ],
    right: 1,
    answer: null
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
    right: 2,
    answer: null
  },
];

const Lesson = () => {
  const [questions, setQuestions] = useState([...QUESTIONS]);
  const [selectAnswer, setSelectAnswer] = useState('');

  return (
    <div>
      {
        questions.map((item, index) => (
          <Answers item={item} />
        ))

      }
      {/* //< LeftCircleTwoTone />
      //< RightCircleTwoTone /> */}
    </div>
  );
};

export default Lesson;
