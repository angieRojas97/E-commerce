import React, {useContext, useEffect, useState} from 'react';
import { CardContext } from '../../Context/CardContext';
import './NumberCount.css';

export default function NumberCount() {
    const [card, setCard] = useContext(CardContext);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(card.length);
    }, [card])

    useEffect(()=>{
    })

    return(
        <div className='circulo'>
            <p className='numero'>{count}</p>
        </div>
    )


}