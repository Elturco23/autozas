import React from 'react';
import './cards.css';
import iconwhat from '../../../img/cards-home/whatsapp (2).png';
import location from '../../../img/cards-home/location.png';
import taller from '../../../img/cards-home/llave-inglesa.png';
import time from '../../../img/cards-home/reloj.png';
import conocimiento from '../../../img/cards-home/conocimiento.png';
import catalogo from '../../../img/cards-home/catalogo.png';
function cards() {
    return (
        <>
        <h1 className='titulo-bienvenida-home'>BIENVENIDOS A AUTOZAS </h1>
        <h3 className='subtitulo-bienvenida-home'>"Tu solución eficaz"</h3>
        <div className='principal-card'>
        <div className="card-1">
        <img src={iconwhat}/>
        
        <div className="card-body">
        <hr className='separador'/>
          <h5 className="card-title">Contacto</h5>
          <p className="card-text">Contactanos de manera rapida vía whatsapp</p>
         
        </div>
      </div>
      <div className="card-1">
      <img src={location}/>
        <div className="card-body">
        <hr className='separador'/>
          <h5 className="card-title">Localización</h5>
          <p className="card-text">Encuentra el taller más cercano a tí rapidamente</p>
         
        </div>
      </div>
      <div className="card-1">
      <img src={taller}/>
        <div className="card-body">
        <hr className='separador'/>
          <h5 className="card-title">Variedad de talleres</h5>
          <p className="card-text">Contamos con una variedad de talleres de toda Barranquilla</p>
          
        </div>
      </div>
      </div>
      <div className='principal-card'>
        <div className="card-1">
        <img src={time}/>
        <div className="card-body">
        <hr className='separador'/>
          <h5 className="card-title">Ahorro de tiempo</h5>
          <p className="card-text">El uso intuitivo de este servicio te permitira encontrar lo que necesitas en un corto lapso de tiempo</p>
         
        </div>
      </div>
      <div className="card-1">
      <img src={conocimiento}/>
        <div className="card-body">
        <hr className='separador'/>
          <h5 className="card-title">Conocimiento de los talleres</h5>
          <p className="card-text">Brindamos información detallada y practica sobre los talleres</p>
          
        </div>
      </div>
      <div className="card-1">
      <img src={catalogo}/>
        <div className="card-body">
        <hr className='separador'/>
          <h5 className="card-title">Catalogo de los Talleres</h5>
          <p className="card-text">Mostramos detalladamente los catalogo de servicios de cada taller</p>
         
        </div>
      </div>
      </div>
      </>
    );
}

export default cards;