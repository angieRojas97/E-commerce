import React, {useState, useEffect} from "react";
import { getFirestore } from '../../firebase';
import ContainProduct from "../ContainProduct/ContainProduct";
import Loader from '../Loader/Loader';


export default function ItemDetailContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
            itemCollection.get()
            .then((querySnapshot) => {
              if (querySnapshot.size === 0) {
                console.log('No hay datos!');
              }
              setItems(querySnapshot.docs.map(doc => {
                return ({ id: doc.id, ...doc.data() });
              }));
            })
            .catch((error) => {
              console.log("Ocurrio un error: ", error);
            })
            .finally(() => {
              setLoading(false);
            })
          }, []);

        if (!loading) {
            return (
              <div className="Home">
                <div className="Home-Products">
                {
                    items.map(product => (
                        <ContainProduct key={product.id} product={product}/>
                  ))
                }
                </div>
              </div>
            );
          }
          if (loading) {
            return (
              <div className="Home">
                <Loader/>
              </div>
            );
        }
}