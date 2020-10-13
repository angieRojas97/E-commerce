import React, {useContext} from 'react';
import { Route, useParams } from 'react-router-dom';


export default function ItemDetailCart({card}) {
  const { id } = useParams();

  return (
      <>
        <ul class="list-group">
          <Route exact path='/products/:id'>
          {card.map(element => <li class="list-group-item" id={element.id} key={element.id}>{element.title}___________________________${element.price}</li>)}
          </Route>
        </ul>
    </>
  )
};