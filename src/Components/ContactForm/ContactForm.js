import React, { useEffect, useState } from 'react';
import './ContactForm.css';

export default function ContactForm (){
    const [coment, setComent] = useState ([]);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [asunt, setAsunt] = useState('');
    const [comment, setComment] = useState('');
        
    function onChangeButton(){
        const params = [
            name,
            email,
            asunt,
            comment
        ]
        setComent([...coment, params]);
        if(name.length > 0 && email.length > 0) {
            window.alert('Tus datos se enviaron correctamente '+ name);
        } else {
            window.alert('Completa los datos obligatorios');
        }
    }

    useEffect(() => {
    },[coment]);

    return( 
    <>
        <h2 className='Home-Tittle'>Contacto</h2>
        <br/>
            <center>
                <form id="formContact" className='cuadro'>
                    <div className="form-group">
                    <label htmlFor="exampleInput1">Tu nombre (obligatorio)</label>
                    <input onInput= {(e) => setName(e.target.value)} type="text" className='campos' id="exampleInput1" required/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tu correo electrónico (obligatorio)</label>
                    <input onInput= {(e) => setEmail(e.target.value)} type="email" className='campos' id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInput2">Asunto</label>
                    <input onInput= {(e) => setAsunt(e.target.value)} type="text" className='campos' id="exampleInput2"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInput3">Tu mensaje</label>
                    <textarea onInput= {(e) => setComment(e.target.value)} type="text" className='comentario' id="exampleInput3"/>
                    </div>
                <button  type="submit" className="btn btn-primary" onClick={onChangeButton}>Enviar</button>
                </form>
            </center>
    </>
    );
  }