import React from 'react';
import { List, ListItem, Link, TextField } from '@mui/material'


const ProductList = ({ products, handleChange, showInput, Blur }) => {
  return (
    <div>
      {products.map((item, index) => (
        <List key={index}>
          <ListItem>
            {item.name}
            {
              !item.isChecked ?
                <Link sx={{ margin: '0px 10px' }} href="#"
                  onClick={() => showInput(item.id)} >
                  Change
                </Link>
                :
                <TextField onChange={handleChange} onBlur={() => Blur(item.id)} />
            }
          </ListItem>
        </List>
      ))
      }
    </div>
  );
};

export default ProductList;
