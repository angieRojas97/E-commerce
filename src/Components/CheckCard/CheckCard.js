import React, {useContext, useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './CheckCard.css';
import ItemDetailCart from '../Icon/ItemDetailCart';
import { CardContext } from '../../Context/CardContext';
import { DataContext } from '../../Context/DataContext';
import UpdateData from './UpdateData';
import { Link } from 'react-router-dom';
import TotalCart from '../TotalCart/TotalCart';


export default function CheckCard() {
    const [card] = useContext(CardContext);
    const [data, setData] = useContext(DataContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [click, setClick] = useState(false)

    function handleData() {
        if (name === '' || email === '' || address === '') {
            window.alert('Por favor, completa los datos obligatorios')
        }
        else{
            const params = [
                name,
                email,
                phone,
                address
            ]
            setData(data => [...data, params])
            setClick(true)
        }
        
    }

    return (
        <>
            <p className='text'>Por favor, completá con tus datos para realizar la compra:</p>
            <p className='text2'>Detalle de tu carrito de compras:</p>
            <Form className='cuadro'>
                <FormGroup>
                    <Label for="name">Nombre y apellido (obligatorio)</Label>
                    <Input className='campos' onInput={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Nombre y apellido" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">E-mail (obligatorio)</Label>
                    <Input className='campos' onInput={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="E-mail" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Número de contacto</Label>
                    <Input className='campos' onInput={(e) => setPhone(e.target.value)} type="number" name="phone" id="phone" placeholder="Número"/>
                </FormGroup>
                <FormGroup>
                    <Label for="address">Dirección de envío (obligatorio)</Label>
                    <Input className='campos' onInput={(e) => setAddress(e.target.value)} type="text" name="address" id="address" placeholder="Dirección" required/>
                </FormGroup>
                    <Button onClick={handleData}>Enviar Datos</Button>
            </Form>
            <div className='cuadro2'>
                <ItemDetailCart card={card}/>
                <TotalCart/>
                <Link to='/products'>
                    <Button>Seguir comprando...</Button>
                </Link>
            </div>
        {click && <UpdateData/>}
        </>
      );
}