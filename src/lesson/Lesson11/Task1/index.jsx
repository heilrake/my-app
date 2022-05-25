import React, { useState } from 'react';

import TableOfWorkers from "./TableOfWorkers";
import SumOfWorkers from "./SumOfWorkers";

const WORKERS = [
  {
    id: 1,
    firstName: 'Bob',
    lastName: 'Marley',
    dayOfWorked: {
      value: '',
      isShowInput: false,
    },
    payRate: {
      value: '',
      isShowInput: false
    },
  },
  {
    id: 2,
    firstName: 'Jonh',
    lastName: 'Nickelson',
    dayOfWorked: {
      value: '',
      isShowInput: false,
    },
    payRate: {
      value: '',
      isShowInput: false
    },
  },
  {
    id: 3,
    firstName: 'Annet',
    lastName: 'Hilton',
    dayOfWorked: {
      value: '',
      isShowInput: false,
    },
    payRate: {
      value: '',
      isShowInput: false
    },
  },
  {
    id: 4,
    firstName: 'Jordan',
    lastName: 'Bush',
    dayOfWorked: {
      value: '',
      isShowInput: false,
    },
    payRate: {
      value: '',
      isShowInput: false,
    },
  },
];
const TABLENAMES = ['First name', 'Last name', 'Pay rate', 'Days of worked', 'Salary'];

const Lesson = () => {
  const [workers, setWorkers] = useState([...WORKERS]);
  const [inputValue, setInputValue] = useState({ payRate: '', dayOfWorked: '' });

  const handleInputValue = ({ target: { name, value } }) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }))
  };

  const onBlur = (id, field) => {
    const copyWorkers = [...workers];

    const result = copyWorkers.find((item) => item.id === id);

    if (inputValue[field] !== '' || result[field].isShowInput) {
      result[field].value = inputValue[field];

      result[field].isShowInput = !result[field].isShowInput;
      setWorkers(copyWorkers);
      setInputValue({ payRate: '', dayOfWorked: '' });
    }
  };

  const showInput = (id, field) => {
    const copyWorkers = [...workers];

    const result = copyWorkers.find((item) => item.id === id)
    if (inputValue[field] !== '' || result[field].isShowInput) {

      result[field].isShowInput = !result[field].isShowInput;
      setWorkers(copyWorkers);
    }
  };

  return (
    <div>
      <TableOfWorkers
        workers={workers}
        handleInputValue={handleInputValue}
        onBlur={onBlur}
        showInput={showInput}
        inputValue={inputValue}
        tableNames={TABLENAMES}
      />
      <SumOfWorkers workers={workers} />
    </div>
  );
};

export default Lesson;
