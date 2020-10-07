import React from 'react';

export default function ItemList () {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
        const productsItem = [
            {id: 'mueble1', name: 'Escritorio', price: '$2000', description: 'string', stock: 4},
            {id: 'mueble2', name: 'Librero', price: '$1500', description: 'string', stock: 3},
            {id: 'mueble3', name: 'Silla Giratoria', price: '$12000', description: 'string', stock: 2}
          ]
        resolve(productsItem);
        }, 2000);
    });
    
    task.then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });
}