import React from 'react';
import ContainProduct from '../ContainProduct/ContainProduct';

const Item = (props) => {


  return (
    <div className="Home-Products">
      {
        props.data.map(product => {
          const result = product.type ? <ContainProduct key={product.id} product={product}/>: '';
          return result;
        })
      }
    </div>
  )
}

export default Item;