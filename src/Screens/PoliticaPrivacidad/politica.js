import React from 'react';
import './politica.css'
import Politica from '../../Components/PoliticaPrivacidad/politicaprivacidad';
import Footer from '../../Components/General/Footer/footer';
import Navbar from '../../Components/General/Navbar/navbar';

function politica() {
    return (
        <>
       
        <Navbar/>
        <div className="container" >
            <Politica/>
        </div>
        <Footer/>
        </>
    );
}

export default politica;