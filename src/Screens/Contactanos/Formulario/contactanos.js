import React from 'react';
import './contactanos.css';
import Formulario from '../../../Components/Contactanos/Formulario/contactanos.js';
import Navbar from '../../../Components/General/Navbar/navbar';
import Footer from '../../../Components/General/Footer/footer';
function contactanos() {
    return (
        <>
        <div>
           <Navbar/>
           <Formulario/>
        </div>
        <Footer/>
        </>
    );
}

export default contactanos;