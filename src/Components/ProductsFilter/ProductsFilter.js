import React, { useState, useEffect, useContext } from 'react';
import { getFirestore } from '../../firebase';
import Loader from '../Loader/Loader';
import './ProductsFilter.css';
import ContainProduct from '../ContainProduct/ContainProduct';
import { CardContext } from '../../Context/CardContext';


export default function ProductFilter(props) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [prueba, setPrueba] = useState(props.id)
  const [card, setCard] = useContext(CardContext);
  
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items")
    const type = itemCollection.where('type', '==', prueba);
    type.get()
    .then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('No data!');
      }
      const queryItems = querySnapshot.docs.map(doc => {
        return ({ id: doc.id, ...doc.data()});
      })
      setItems(queryItems);
    })
    .catch((error) => {
      console.log("Ocurrio un error: ", error);
    })
    .finally(() => {
      setLoading(false)
    })
  }, []);

  useEffect(() => {
    console.log(items);
    console.log(card)
  }, [items])

  if (!loading) {
  return (
    <div>
      <h2 className='Home-Tittle'>{prueba}</h2>
      {
        items.map(product => (
        <ContainProduct key={product.id} product={product}/>
        ))
     }
    </div>
    );
    }
    if (loading) {
    return(
        <div className="Home">
            <Loader/>
        </div>
    );
}
}