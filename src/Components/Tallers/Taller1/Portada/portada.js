import React from 'react';
import './portada.css';
function portada(props) {
    return (
        <div className='container-portada-taller1'>
            <img src={props.portada} width='100%' ></img>
        </div>
    );
}

export default portada;