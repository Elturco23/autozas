import React from 'react';
import './contactanos.css';
import Formulario from '../../../Components/Contactanos/Formulario/contactanos.js';
import Navbar from '../../../Components/General/Navbar/navbar';
import Footer from '../../../Components/General/Footer/footer';
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/WhatsApp";
function contactanos() {
    return (
        <>
        <div>
        <Fab color="primary" aria-label="add">
          <AddIcon />
          <div class="radar"></div>
          <div class="radar"></div>
          <div class="radar"></div>
          <div class="radar"></div>
        </Fab>
           <Navbar/>
           <Formulario/>
        </div>
        <Footer/>
        </>
    );
}

export default contactanos;