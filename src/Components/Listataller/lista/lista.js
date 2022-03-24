import React from 'react';
import './lista.css'
import {talleres} from './talleres';
import logo from '../../../img/Home/logo1.png';
const items=talleres;
export default class lista extends React.Component{
    render(){
  return (
    <div className='container-listatalleres'>
      <h1 className='titulo-listatalleres'>Talleres Socios</h1>
  <div class="list-group">
          {items.map((item) => (
  <a href={item.href} class="list-group-item list-group-item-action flex-column align-items-start ">
    <div class="d-flex w-100 justify-content-between" id='lista-taller'>
      <img src={item.logo} height={item.heigth} width={item.width} class="mb-1" />
      <h1 className="mb-1-texto">{item.title}</h1>
      <small className='texto-small-listataller'>Socio de Autozas <br/>
      <img className='logo-autozas-lista-taller' src={logo} height="60px" /></small>
    </div>
    
    <h4 className='mb-2'>{item.descripcion}</h4>
  </a>
  ))}
</div>
</div>
    );
  }
}
