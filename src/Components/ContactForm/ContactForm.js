import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm (){
    const [coment, setComent] = useState ([]);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [asunt, setAsunt] = useState('');
    const [comment, setComment] = useState('');

    function onChangeEmail(event){
        setEmail(event.target.value);
    }
    
    function onChangeName(event){
        setName(event.target.value);
    }

    function onChangeAsunt(event){
        setAsunt(event.target.value);
    }

    function onChangeComment(event){
        setComment(event.target.value);
    }
        
    function onChangeButton(){
        debugger;
        const params = {
            name: name,
            email: email,
            asunt: asunt,
            coment: comment
        }
        setComent(currentComent => [...currentComent, params])
       window.alert('Tus datos se enviaron correctamente!')
    }
    return( 
    <>
        <h2 className='Home-Tittle'>Contacto</h2>
        <br/>
        <form>
            <div className="form-group">
            <label htmlFor="exampleInput1">Tu nombre (obligatorio)</label>
            <input onInput= {onChangeName} type="text" className='prueba' id="exampleInput1"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tu correo electrónico (obligatorio)</label>
            <input onInput= {onChangeEmail} type="email" className='prueba' id="exampleInputEmail1" aria-describedby="emailHelp"/>
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