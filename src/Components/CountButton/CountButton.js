import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { CardContext } from '../../Context/CardContext';


export default function CountButton({element}) {
    const { id } = useParams();
    const [count, setCount] = useState(0);
    const [card, setCard] = useContext(CardContext);

    const handleIncrease =()=>{
        setCount(count+1);
    }

    const handleDecrease =()=>{
        setCount(count-1);
    }

    const toggleAdd =()=>{
        const product = element;
        console.log(product);
        setCard(currentCard => [...currentCard, product])
    }
    
return(
    <div>
        <Button onClick={handleIncrease}>+</Button>
        <Button onClick={handleDecrease}>-</Button>
        <Button onClick={toggleAdd}>Agregar al carrito</Button>
    </div>
)
}