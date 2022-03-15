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
        <div class="card-1">
        <img src={iconwhat}/>
        
        <div class="card-body">
        <hr className='separador'/>
          <h5 class="card-title">Contacto</h5>
          <p class="card-text">Contactanos de manera rapida vía whatsapp</p>
         
        </div>
      </div>
      <div class="card-1">
      <img src={location}/>
        <div class="card-body">
        <hr className='separador'/>
          <h5 class="card-title">Localización</h5>
          <p class="card-text">Encuentra el taller más cercano a tí rapidamente</p>
         
        </div>
      </div>
      <div class="card-1">
      <img src={taller}/>
        <div class="card-body">
        <hr className='separador'/>
          <h5 class="card-title">Variedad de talleres</h5>
          <p class="card-text">Contamos con una variedad de talleres de toda Barranquilla</p>
          
        </div>
      </div>
      </div>
      <div className='principal-card'>
        <div class="card-1">
        <img src={time}/>
        <div class="card-body">
        <hr className='separador'/>
          <h5 class="card-title">Ahorro de tiempo</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         
        </div>
      </div>
      <div class="card-1">
      <img src={conocimiento}/>
        <div class="card-body">
        <hr className='separador'/>
          <h5 class="card-title">Conocimiento de los talleres</h5>
          <p class="card-text">Brindamos información detallada y practica sobre los talleres</p>
          
        </div>
      </div>
      <div class="card-1">
      <img src={catalogo}/>
        <div class="card-body">
        <hr className='separador'/>
          <h5 class="card-title">Catalogo de los Talleres</h5>
          <p class="card-text">Mostramos detalladamente los catalogo de servicios de cada taller</p>
         
        </div>
      </div>
      </div>
      </>
    );
}

export default cards;