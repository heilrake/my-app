import React, { useState } from 'react';

import TableOfWorkers from "./TableOfWorkers";

const WORKERS = [
  {
    id: 1,
    firstName: 'Bob',
    lastName: 'Marley',
    dayOfWorked: null,
    payRate: null,
    isChecked: true,
  },
  {
    id: 2,
    firstName: 'Jonh',
    lastName: 'Nickelson',
    dayOfWorked: null,
    payRate: null,
    isChecked: true,
  },
  {
    id: 3,
    firstName: 'Annet',
    lastName: 'Hilton',
    dayOfWorked: null,
    payRate: null,
    isChecked: true,
  },
  {
    id: 4,
    firstName: 'Jordan',
    lastName: 'Bush',
    dayOfWorked: null,
    payRate: null,
    isChecked: true,
  },
];
const Lesson = () => {
  const [workers, setWorkers] = useState([...WORKERS]);
  const [inputValue, setInputValue] = useState({ dayOfWorked: null, payRate: null });

  const handleInputValue = ({ target: { name, value } }) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }))
  };
  const onBlur = (id) => {
    if (inputValue !== '') {
      const copyWorkers = [...workers];

      const result = copyWorkers.find((item) => item.id === id);

      result.isChecked = !result.isChecked
      result.dayOfWorked = inputValue.dayOfWorked;
      result.payRate = inputValue.payRate;

      setWorkers(copyWorkers);
      setInputValue('');
    }

  }

  return (
    <div>
      <TableOfWorkers
        workers={workers}
        handleInputValue={handleInputValue}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Lesson;
