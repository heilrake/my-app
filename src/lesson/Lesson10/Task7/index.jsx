import React, { useState } from 'react';
import TableOfProducts from "./component/TableOfProducts";

const PRODUCTS = [
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
]

const Lesson = () => {
  const [products, setProducts] = useState([...PRODUCTS]);

  const deleteElement = (id) => {
    const copyProducts = [...products];
    copyProducts.splice(id, 1);
    setProducts(copyProducts);
  }
  return (
    <div>
      <TableOfProducts products={products} deleteElement={deleteElement} />
    </div>
  );
};

export default Lesson;
