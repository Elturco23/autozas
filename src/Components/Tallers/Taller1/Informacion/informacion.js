import React from 'react';
import './informacion.css';
import iconLocalitation from '../../../../img/Taller/Taller1/localizacion.png'
function informacion() {
    return (
        <div className='container-principal-informacion-taller1'>
            <div className='logo-taller1'>
              <img src="https://logos-marcas.com/wp-content/uploads/2020/04/Toyota-Logo.png" height='70px' width='125px'  />
            </div>
            <div className='nombre-taller1'>
              <h2>Toyota Fc</h2> <br/> <h5>Mecanico - Ventas</h5>
            </div>
            <div className='direccion-taller1'>
             <h5><img src={iconLocalitation} /> Via 40 #67-125</h5>
            </div>
            <div className='contacto-taller1'>
               <button ></button>
            </div>
        </div>
    );
}

export default informacion