import React from 'react';
import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import CardIcon from '../Icon/Cardicon';

class myNav extends React.Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Muebles JR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/products">Productos</Nav.Link>
                        <Nav.Link href="/products/living">Living</Nav.Link>
                        <Nav.Link href="/products/oficina">Oficina</Nav.Link>
                        <Nav.Link href="/products/cocina">Cocina</Nav.Link>
                        <Nav.Link href="/contact">Contacto</Nav.Link>
                    </Nav>
                    <CardIcon />
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default myNav;