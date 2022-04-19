import React from "react";
import './carrusel.css';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {cartas} from './cartas';

const items=cartas;
export default class carousel extends React.Component {
  state = {
    responsive: { 500: { items: 2 }, 758: { items: 3 }, 1024: { items: 4 } },
  };
  render() {
    const { responsive } = this.state;
    return (
      <div className="container-carousel">
      
      <div className="carousel-wr1apper">
      <h2>Talleres Asociados a Autozas</h2>
        <AliceCarousel autoPlay
          autoPlayInterval="1500"
          infinite
          buttonsDisabled={true}
          disableButtonsControls={true}
          disableDotsControls={true}
          responsive={responsive} >
          {items.map((item) => (
            <div class="container-cartas">
            <img src={item.img} height={item.alto} width={item.ancho} />
            
            <div class="card-cuerpo">
              
            <hr className='separador'/>
              <h5 class="card-title-carousel">{item.title}</h5>
              <p class="card-text-carousel">{item.descripcion}</p>
              
            </div>
          </div>
          ))}
        </AliceCarousel>
      </div>
      </div>
        
       
     
    );

    }

  
}
