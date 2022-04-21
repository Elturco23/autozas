import React from 'react';
import './politica.css'
import Politica from '../../Components/PoliticaPrivacidad/politicaprivacidad';
import Footer from '../../Components/General/Footer/footer';
import Navbar from '../../Components/General/Navbar/navbar';
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/WhatsApp";
function politica() {
    return (
        <>
        <Fab color="primary" aria-label="add">
          <AddIcon />
          <div className="radar"></div>
          <div className="radar"></div>
          <div className="radar"></div>
          <div className="radar"></div>
        </Fab>
        <Navbar/>
        <div className="container" >
            <Politica/>
        </div>
        <Footer/>
        </>
    );
}

export default politica;