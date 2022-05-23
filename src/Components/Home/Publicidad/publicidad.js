import React from 'react';
import './publicidad.css';
import Mario from '../../../img/Publicidad/mario.jpg';
import Carlos from '../../../img/Publicidad/CarlitosForm.jpeg';
import Jorge from '../../../img/Publicidad/jorge.png';
function publicidad() {
    return (
        <div className='container-principal-publicidad'>
     <h2>Conoce a nuestro equipo</h2>
     <hr style={{color:'#2b2d42', height:"24px"}}/>
        <div className='container-principal-publicidad-1'>
        <div style={{borderRadius:"10px",marginRight:"12%"}} className="card-1">
        <img style={{margin:"0 30%",marginTop:"5%"}} height="110px" src={Jorge} alt="description of image"/>
        
        <div className="card-body" alt="description of image">
        <hr className='separador' />
          <h5 className="card-title">Jorge Riaño</h5>
          <p className="card-text">Desarrollador Front-End</p>
         
        </div>
      </div>
        <div style={{borderRadius:"10px",marginRight:'12%'}} className="card-1">
        <img style={{margin:"0 30%",marginTop:"5%"}} height="110px" src={Mario} alt="description of image"/>
        
        <div className="card-body" alt="description of image">
        <hr className='separador' />
          <h5 className="card-title">Mario Rodriguez</h5>
          <p className="card-text">Desarrollador Back-End</p>
         
        </div>
      </div>
      <div style={{borderRadius:"10px"}} className="card-1">
        <img style={{margin:"0 35%",marginTop:"5%"}} height="110px" src={Carlos} alt="description of image"/>
        
        <div className="card-body" alt="description of image">
        <hr className='separador' />
          <h5 className="card-title">Carlos Menassa</h5>
          <p className="card-text">Ingeniero de Software</p>
         
        </div>
      </div>
        </div>
        </div>
    );
}

export default publicidad;