import React from 'react';
import { List, ListItem, Link, TextField } from '@mui/material'


const ProductList = ({ products, handleInputValue, showInput, onBlur }) => {
  return (
    <List>
      {products.map((item, index) => (
        <ListItem key={index}>
          {item.name}
          {item.isChecked ? (
            <TextField onChange={handleInputValue} onBlur={() => onBlur(item.id)} />
          ) : (
            <Link
              sx={{ margin: '0px 10px' }}
              href="#"
              onClick={() => showInput(item.id)}
            >
              Change
            </Link>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;
