import React from 'react';
import Navbar from '../../../Components/General/Navbar/navbar';
import Footer from '../../../Components/General/Footer/footer';
import Portada from '../../../Components/Tallers/Taller1/Portada/portada';
import Informacion from '../../../Components/Tallers/Taller1/Informacion/informacion';
function taller() {
  
    return (
        <div className='container-principal-taller'>
          <Navbar/> 
          <Portada/> 
          <Informacion/>
        </div>
    );
}

export default taller;