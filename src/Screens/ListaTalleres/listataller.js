import React from 'react';
import Lista from '../../Components/Listataller/lista/lista';
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
        </Fab>
            <Navbar/>
            <Lista/>
        </div>
        <Footer/>
        </>
    );
}

export default listataller;