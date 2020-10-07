import React from 'react';

export default function Item(props) {
  return <ul class="list-group">
    {props.data.map(element => <li class="list-group-item" id={element.id} key={element.id}>{element.name} {element.price}</li>)}
  </ul>
};