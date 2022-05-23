import React from 'react';
import Lista from '../../Components/Listataller/buscador';
import Navbar from '../../Components/General/Navbar/navbar';
import Footer  from '../../Components/General/Footer/footer';

import './listataller.css';
function listataller() {
    return (
        <>
        <div className='container-principal-listataller'>
       
         
            <Navbar/>
            <Lista/>
        </div>
        <Footer/>
        </>
    );
}

export default listataller;