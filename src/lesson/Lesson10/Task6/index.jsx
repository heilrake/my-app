import React, { useState } from 'react';
import ProductList from './component/ProductList.jsx';

import useStyles from './style/style';

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
  },];


const Lesson = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([...PRODUCTS]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  const showInput = (id) => {
    const copyProduts = [...products];

    const result = copyProduts.find((item) => item.id === id)
    result.isChecked = !result.isChecked

    setProducts(copyProduts);
  };

  const Blur = (id) => {
    if (inputValue !== '') {
      const copyProduts = [...products];

      const result = copyProduts.find((item) => item.id === id);

      result.isChecked = !result.isChecked
      result.name = inputValue;
      setProducts(copyProduts);
      setInputValue('');
    }
  };

  return (
    <div className={classes.root}>
      <ProductList
        products={products}
        handleChange={handleChange}
        showInput={showInput}
        Blur={Blur}
      />
    </div>
  );
};

export default Lesson;
