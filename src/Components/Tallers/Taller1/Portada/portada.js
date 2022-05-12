import React from 'react';
import './portada.css';
function portada(props) {
    return (
        <div className='container-portada-taller1'>
            <img src={props.portada} width='100%' alt="description of image" ></img>
        </div>
    );
}

export default portada;