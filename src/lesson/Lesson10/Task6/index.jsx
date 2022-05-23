import React, { useState } from 'react';

import ProductList from './ProductList';

import useStyles from './style';

const PRODUCTS = [
  {
    id: 1,
    name: 'Orange',
    isChecked: false,
  },
  {
    id: 2,
    name: 'Apple',
    isChecked: false,
  },
  {
    id: 3,
    name: 'Banana',
    isChecked: false,
  },
  {
    id: 4,
    name: 'Cherry',
    isChecked: false,
  },
];

const Lesson = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([...PRODUCTS]);
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const showInput = (id) => {
    const copyProduts = [...products];
    const result = copyProduts.find((item) => item.id === id);

    result.isChecked = !result.isChecked;
    setProducts(copyProduts);
  };

  const onBlur = (id) => {
    if (inputValue !== '') {
      const copyProduts = [...products];
      const result = copyProduts.find((item) => item.id === id);

      result.isChecked = !result.isChecked;
      result.name = inputValue;

      setProducts(copyProduts);
      setInputValue('');
    }
  };

  return (
    <div className={classes.root}>
      <ProductList
        products={products}
        handleInputValue={handleInputValue}
        showInput={showInput}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Lesson;
