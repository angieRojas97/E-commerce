import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardIcon from '../Icon/Cardicon';
import './Navbar.css';
import NumberCount from '../Icon/NumberCount';

class myNav extends React.Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Link to='/'>
                    <Navbar.Brand>Muebles JR</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to='/' className='linkRoute'>Inicio</Link>
                        <Link to='/products' className='linkRoute'>Productos</Link>
                        <Link to='/products/living' className='linkRoute'>Living</Link>
                        <Link to='/products/oficina' className='linkRoute'>Oficina</Link>
                        <Link to='/products/cocina' className='linkRoute'>Cocina</Link>
                        <Link to='/contact' className='linkRoute'>Contacto</Link>
                    </Nav>
                    <CardIcon />
                    <NumberCount/>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default myNav;