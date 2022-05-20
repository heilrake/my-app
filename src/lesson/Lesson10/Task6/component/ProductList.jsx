import React from 'react';
import { List, ListItem, Link, TextField } from '@mui/material'


const ProductList = ({ products, handleInputValue, showInput, onBlur }) => {
  return (
    <div>
      {products.map((item, index) => (
        <List key={index}>
          <ListItem>
            {item.name}
            {item.isChecked ?
              (<TextField onChange={handleInputValue} onBlur={() => onBlur(item.id)} />)
              :
              (
                <Link
                  sx={{ margin: '0px 10px' }}
                  href="#"
                  onClick={() => showInput(item.id)}
                >
                  Change
                </Link>
              )
            }
          </ListItem>
        </List>
      ))
      }
    </div>
  );
};

export default ProductList;
