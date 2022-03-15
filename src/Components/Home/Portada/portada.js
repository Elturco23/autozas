import React from 'react';
import Portada from '../../../img/Home/portada1.jpg';
import logo from '../../../img/Home/logo1.png';
import './portada.css';
function portada() {
    return (
        <div className='container-portada'>
           <img src={Portada} height="100%" width="100%"/> 
           <img className='logo-portada' src={logo} height='150px' width='265px' />
        </div>
    );
}

export default portada;