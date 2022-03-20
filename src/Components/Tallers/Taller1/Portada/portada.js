import React from 'react';
import Portada1 from '../../../../img/Taller/Taller1/portada-taller1.jpg';
import './portada.css';
function portada() {
    return (
        <div className='container-portada-taller1'>
            <img src={Portada1} width='100%' height='100%'></img>
        </div>
    );
}

export default portada;