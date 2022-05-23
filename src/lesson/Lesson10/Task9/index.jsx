import React, { useState } from 'react';

import TableOfFructs from "./TableOfFruits";
import AddElementToTable from "./AddElementToTable";
import SumOfFructs from './SumOfFruits'

const FRUITS = [
  {
    id: 1,
    name: 'Banana',
    count: 25,
    priceOfOne: 4,
  },
  {
    id: 2,
    name: 'Apple',
    count: 17,
    priceOfOne: 2,
  },
  {
    id: 3,
    name: 'Cherry',
    count: 225,
    priceOfOne: 1,
  },
  {
    id: 4,
    name: 'Orange',
    count: 5,
    priceOfOne: 7,
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

    copyProducts.push(data);

    setFruits(copyProducts)
  }


  return (
    <div>
      <TableOfFructs fruits={fruits} deleteElement={deleteElement} />
      <SumOfFructs fruits={fruits} />
      <AddElementToTable addElement={addElement} />
    </div>
  );
};

export default Lesson;
