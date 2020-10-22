import React from 'react';


export default function ItemDetailCart({card}) {

  return (
      <>
        <ul className="list-group">
          {card.map(element => <li class="list-group-item" id={element.id} key={element.id}>{element.title}___________________________${element.price}</li>)}
        </ul>
    </>
  )
};