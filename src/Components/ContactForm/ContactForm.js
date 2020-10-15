import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm (){
    const [coment, setComent] = useState ([]);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [asunt, setAsunt] = useState('');
    const [comment, setComment] = useState('');

    function onChangeEmail(e){
        e.preventDefault();
        setEmail(e.target.value);
    }
    
    function onChangeName(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function onChangeAsunt(e){
        e.preventDefault();
        setAsunt(e.target.value);
    }

    function onChangeComment(e){
        e.preventDefault();
        setComment(e.target.value);
    }
        
    function onChangeButton(){
        const params = {
            name: name,
            email: email,
            asunt: asunt,
            coment: comment
        }
        setComent(coment.concat(params))
        if(name.length > 0 && email.length > 0) {
            window.alert('Tus datos se enviaron correctamente '+ name);
        } else {
            window.alert('Completa los datos obligatorios');
        }
    }
    return( 
    <>
        <h2 className='Home-Tittle'>Contacto</h2>
        <br/>
        <form id="formContact">
            <div className="form-group">
            <label htmlFor="exampleInput1">Tu nombre (obligatorio)</label>
            <input onInput= {onChangeName} type="text" className='prueba' id="exampleInput1" required/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tu correo electrónico (obligatorio)</label>
            <input onInput= {onChangeEmail} type="email" className='prueba' id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput2">Asunto</label>
            <input onInput= {onChangeAsunt} type="text" className='prueba' id="exampleInput2"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInput3">Tu mensaje</label>
            <textarea onInput= {onChangeComment} type="text" className='comentario' id="exampleInput3"/>
            </div>
        <button  type="submit" className="btn btn-primary" onClick={onChangeButton}>Enviar</button>
        </form>
    </>
    );
  }