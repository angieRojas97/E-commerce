import React, { useEffect, useState, useContext } from 'react';
import { Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import { CardContext } from '../../Context/CardContext';
import Loader from '../Loader/Loader';
import './ItemDetail.css';


function ItemDetail () {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [card, setCard] = useContext(CardContext);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(id);

        item.get()
        .then((doc) => {
            if (!doc.exists) {
                console.log('El doc no existe');
                return true;
            }
            const dataQuery = doc.data();
            console.log(dataQuery);
            setProduct({ id: doc.id, ...doc.data() });
        })
        .catch((error) =>{
            console.log('Ocurrio un error', error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [id]);

    const toggleAdd =()=>{
        setCard(currentCard => [...currentCard, product])
    }

    const renderProduct = () => (
        <p className='Product-Description'>
          {product.description}
        </p>
      )

    useEffect(() => {
        console.log(card);
      }, [card]);

      return(
        <>
          {loading && <Loader/>}
          {!loading &&
            <div className="Product" style={{"display": "flex", "justifyContent": "center"}}>
                <h2 className="Product-Title">{product.title}</h2>
                <img alt='product' className='imgItem' src={product.img}/>
                {renderProduct()}
                <Button onClick={toggleAdd} sign={'Add to Cart'}/>
            </div>
            }
        </>
    );
}
export default ItemDetail;