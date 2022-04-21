import React from 'react';
import Lista from '../../Components/Listataller/buscador';
import Navbar from '../../Components/General/Navbar/navbar';
import Footer  from '../../Components/General/Footer/footer';
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/WhatsApp";
import './listataller.css';
function listataller() {
    return (
        <>
        <div className='container-principal-listataller'>
        <Fab color="primary" aria-label="add">
          <AddIcon />
          <div class="radar"></div>
          <div class="radar"></div>
          <div class="radar"></div>
          <div class="radar"></div>
        </Fab>
            <Navbar/>
            <Lista/>
        </div>
        <Footer/>
        </>
    );
}

export default listataller;