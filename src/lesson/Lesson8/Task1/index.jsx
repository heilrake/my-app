import React, { useState } from 'react';

import { Checkbox } from '@mui/material'
import classNames from 'classnames';
import useStyles from './styles';

const PRODUCTS = [
  {
    name: 'Milk',
    id: 1,
    isChecked: true
  },
  {
    name: 'Bobs',
    id: 2,
    isChecked: false
  },
  {
    name: 'Garlick',
    id: 3,
    isChecked: true
  },
  {
    name: 'Onion',
    id: 4,
    isChecked: false
  }
]

const Task1 = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([...PRODUCTS]);

  const handleChange = (id) => {
    const copyProducts = [...products];

    const result = copyProducts.find((product) => product.id === id);

    result.isChecked = !result.isChecked

    setProducts(copyProducts);
  }

  return (
    <div className={classes.root}>
      {
        products.map((product, index) => (
          <ul key={index}>
            <li className={classNames(classes.li, { 'noactive': product.isChecked })}>{product.name}<Checkbox checked={product.isChecked}
              onChange={() => handleChange(product.id)} /></li>
          </ul>
        ))
      }

    </div >
  );
};

export default Task1;
