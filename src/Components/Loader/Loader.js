import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loader.css';

export default function Loader() {
    return(
        <div className="loader">
            <Spinner animation="grow"/>
        </div>
    )
}