import React from 'react';
import { NavLink } from 'react-router-dom';

import './Product.css';

export default function ContainProduct(props) {
  return (
    <>
        <p className='Product'>
          <NavLink to={`/products/${props.product.id}`}>
            <img
              alt='product'
              className="Product-Image"
              src={props.product.img}
            />
            <div className="Product-Footer">
              <h4 className="Product-Price">${props.product.price}</h4>
              <p className="Product-Title">{props.product.title}</p>
            </div>
          </NavLink>
        </p>
    </>
  );
}