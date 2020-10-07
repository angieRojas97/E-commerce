import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class ToastWelc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            cont: 0

        };
    }

    openModal=()=>{
        this.setState({open: this.state.open});
    }
    closeModal=()=>{
        this.setState({open: !this.state.open});
    }
    saveMail=()=>{
    }


    render(){
        return (
            <Modal isOpen={this.state.open}>
                <ModalHeader>
                    Bienvenido!
                    <br/>
                    Deseas recibir nuestras super ofertas?
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input type="email" id="email" ref="email"/>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.saveMail}>Recibir Ofertas!</Button>
                    <Button onClick={this.closeModal}>Cerrar</Button>
                </ModalFooter>
            </Modal>
            
        );
    }
}

export default ToastWelc;