import React from 'react';
import Portada from '../../../img/Home/portada1.png';

import './portada.css';
function portada() {
    return (
        <div className='container-portada'>
           <img src={Portada} height="100%" width="100%"/>
           
           
        </div>
    );
}

export default portada;