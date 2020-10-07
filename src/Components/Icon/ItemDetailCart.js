import React from 'react';


export default function ItemDetailCart({card}) {
  return (
      <>
        <ul class="list-group">
  {card.map(element => <li class="list-group-item" id={element.id} key={element.id}>{element.name} {element.price}</li>)}
        </ul>
    </>
  )
};