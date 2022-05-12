import React from 'react';
import './publicidad.css';
import Phone from '../../../img/Publicidad/Pantalla-móvil.png';

import { Icon } from '@iconify/react';
function publicidad() {
    return (
        <div className='container-principal-publicidad'>
        <h2>Proximamente App Movíl</h2>
        <div className='container-principal-publicidad-1'>
             <div className='publicidad1'>
<img src={Phone} height='370px' alt="description of image"/>
            </div>
            <div className='publicidad2'>
            
            <button width='100%'>
            <Icon icon="bxl:play-store" color="white" width="64" height="64" /><h2 className='texto-apple'>Play Store</h2>
            </button>
            <button width='100%'>
            <Icon icon="ion:logo-apple" color="white" width="64" height="64" /><h2 className='texto-apple'>App Store</h2>
            </button>
            </div>
        </div>
        </div>
    );
}

export default publicidad;