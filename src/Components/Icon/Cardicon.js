import React, {useState, useContext, useEffect} from 'react';
import carrito from './img/cart.jpg';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { CardContext } from '../../Context/CardContext';
import ItemDetailCart from './ItemDetailCart'
import NoProducts from './NoProducts';


export default function CardIcon () {

    const [open, setOpen] = useState(false);
    const [card, setCard] = useContext(CardContext);


    const toggleModal=()=>{
        setOpen(!open);
    }

    const prueba=()=>{
        if (card.lenght > 0){
            return true;
        }
        return false;
    }

    return(
        <>
        <div>
        <img src={carrito} onClick={toggleModal} className='carrito' alt='Carrito'></img>
        </div>
        <Modal isOpen={open}>
                <ModalHeader>
                    Carrito de compras
                </ModalHeader>
                <ModalBody>
                    { prueba ? <ItemDetailCart card={card}/> : <NoProducts/> }
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleModal}>Cerrar</Button>
                    <Button>Comprar</Button>
                </ModalFooter>
            </Modal>
    </>
    )
};