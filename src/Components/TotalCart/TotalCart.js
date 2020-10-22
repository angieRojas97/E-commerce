import React, { useState, useContext, useEffect } from 'react';
import { TotalContext } from '../../Context/TotalContext';
import './TotalCart.css';

export default function TotalCart(){
    const [prices, setPrices] = useState([]);
    const [total] = useContext(TotalContext);

    useEffect(() => {
        let suma = 0; 
        total.map((tot) => suma = suma + tot)
        setPrices(suma);
    },[])

    return(
        <div className='price'>
            <p>Total___________________${prices}</p>
        </div>
    )


}