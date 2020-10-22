import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';


class ToastWelc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            cont: 0,
            email: ''
        };
    }

    openModal=()=>{
        this.setState({open: this.state.open});
    }
    closeModal=()=>{
        this.setState({open: !this.state.open});
    }
    onChangeEmail=(e)=>{
        e.preventDefault();
        this.state.email= e.target.value;
    }

    saveMail=()=>{
        if (this.state.email.length > 0){
        ReactDOM.findDOMNode(this.refs.email).value = "";
        window.alert('Tu email se ha registrado exitosamente!')
        this.closeModal();
    } else {
        window.alert('Ingresa un email válido por favor!')
    }
    }


    render(){
        return (
            <Modal isOpen={this.state.open}>
                <ModalHeader>
                    Bienvenido!
                    <br/>
                    Deseas recibir nuestras ofertas?
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input onInput={this.onChangeEmail} type="email" id="email" ref="email"/>
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