import React from 'react';
import Quienessomos from '../../Components/Quienessomos/index';
import Footer from '../../Components/General/Footer/footer';
import Navbar from '../../Components/General/Navbar/navbar';
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/WhatsApp";
function index(props) {
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
        <div>
            <Quienessomos/>
        </div>
        <Footer/>
        </>
    );
}

export default index;