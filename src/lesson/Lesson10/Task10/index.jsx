import React, { useState } from 'react';

import TableOfFructs from "./TableOfFruits";
import AddElementToTable from "./AddElementToTable";
import SumOfFructs from './SumOfElement'

const FRUITS = [
  {
    id: 1,
    name: 'Banana',
    count: 25,
    priceOfOne: 4,
    isChecked: true,
  },
  {
    id: 2,
    name: 'Apple',
    count: 17,
    priceOfOne: 2,
    isChecked: true,
  },
  {
    id: 3,
    name: 'Cherry',
    count: 225,
    priceOfOne: 1,
    isChecked: true,
  },
  {
    id: 4,
    name: 'Orange',
    count: 5,
    priceOfOne: 7,
    isChecked: true,
  },
];

const Lesson = () => {
  const [fruits, setFruits] = useState([...FRUITS]);

  const deleteElement = (id) => {
    const copyProducts = [...fruits];

    copyProducts.splice(id, 1);

    setFruits(copyProducts);
  };

  const addElement = (data) => {
    const copyProducts = [...fruits];

    copyProducts.push({
      id: copyProducts.length + 1,
      name: data.name,
      count: data.count,
      priceOfOne: data.priceOfOne,
      isChecked: true,
    });

    setFruits(copyProducts);
  };

  const handleCheckbox = (id) => {
    const copyProducts = [...fruits];

    const result = copyProducts.find((item) => item.id === id);

    result.isChecked = !result.isChecked;

    setFruits(copyProducts);
  };

  return (
    <div>
      <TableOfFructs
        fruits={fruits}
        deleteElement={deleteElement}
        handleCheckbox={handleCheckbox}
      />
      <SumOfFructs fruits={fruits} />
      <AddElementToTable addElement={addElement} />
    </div>
  );
};

export default Lesson;
