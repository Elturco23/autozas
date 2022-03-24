import React from 'react';
import Navbar from '../../../Components/General/Navbar/navbar';
import Footer from '../../../Components/General/Footer/footer';
import Portada from '../../../Components/Tallers/Taller1/Portada/portada';
import Informacion from '../../../Components/Tallers/Taller1/Informacion/informacion';
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/WhatsApp";
import MapaT1	 from '../../../Components/Tallers/Taller1/Mapa/mapa';
import Catalogo from '../../../Components/Tallers/Taller1/Catalogo/catalogo';
import './taller1.css';
function taller() {
  
    return (
      <>
        <div className='container-principal-taller'>
          <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
          <Navbar/> 
          <Portada/> 
          <Informacion/>
          <div className='mapa-and-catalogo'>
          <MapaT1/>
          <Catalogo/>
          </div>
        </div>
        <Footer/>
        </>
    );
}

export default taller;