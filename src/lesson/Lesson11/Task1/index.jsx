import React, { useState } from 'react';

import TableOfWorkers from "./TableOfWorkers";

const WORKERS = [
  {
    id: 1,
    firstName: 'Bob',
    lastName: 'Marley',
    dayOfWorked: {
      value: '12',
      isShowInput: false,
    },
    payRate: {
      value: '009',
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
const Lesson = () => {
  const [workers, setWorkers] = useState([...WORKERS]);
  const [inputValue, setInputValue] = useState({ payRate: '', dayOfWorked: '' });

  const handleInputValue = ({ target: { name, value } }) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }))
  };

  console.log(inputValue);

  const onBlur = (id, field) => {


    const copyWorkers = [...workers];

    const result = copyWorkers.find((item) => item.id === id);

    if (inputValue[field] !== '' || result[field].isShowInput) {
      result[field].value = inputValue[field];

      result[field].isShowInput = !result[field].isShowInput;
      setWorkers(copyWorkers);
      setInputValue('');
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
      />
    </div>
  );
};

export default Lesson;
