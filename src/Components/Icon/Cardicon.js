import React, {useState, useContext } from 'react';
import carrito from './img/cart.jpg';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { CardContext } from '../../Context/CardContext';
import ItemDetailCart from './ItemDetailCart'
import NoProducts from './NoProducts';
import { Link } from 'react-router-dom';
import TotalCart from '../TotalCart/TotalCart';


export default function CardIcon () {

    const [open, setOpen] = useState(false);
    const [card] = useContext(CardContext);


    const toggleModal=()=>{
        setOpen(!open);
    }

    const prueba=()=>{
        if (card.length > 0){
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
                    {prueba ? <TotalCart/> : <p>Aun no agregaste productos al carrito</p>}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleModal}>Cerrar</Button>
                    <Link to='/cardDetail'>
                        <Button onClick={toggleModal}>Comprar</Button>
                    </Link>
                </ModalFooter>
            </Modal>
    </>
    )
};