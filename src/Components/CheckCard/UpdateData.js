import React, {useContext, useEffect} from 'react';
import { CardContext } from '../../Context/CardContext';
import { DataContext } from '../../Context/DataContext';
import { getFirestore } from '../../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


export default function UpdateData() {
    const [card] = useContext(CardContext);
    const [data] = useContext(DataContext);

    useEffect(()=>{
        const db = getFirestore();

        const orders = db.collection('orders');
        const newOrder = {
            buyer: data,
            items: card,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        };
        orders.add(newOrder).then(({id}) => {
             const OrderId= id;
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            console.log('salio bien!')
        })
    },[]);

    
    return(
        window.alert('Tus datos han sido enviados de manera correcta!')
    )
}