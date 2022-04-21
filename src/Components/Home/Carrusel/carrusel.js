import React from "react";
import './carrusel.css';
import Carousel from './index';
import "react-alice-carousel/lib/alice-carousel.css";

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
        <Carousel responsive={responsive}/>
      </div>
      </div>
        
       
     
    );

    }

  
}
