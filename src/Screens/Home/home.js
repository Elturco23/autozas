import React from "react";
import './home.css';
import Navbar from "../../Components/General/Navbar/navbar";
import Footer from "../../Components/General/Footer/footer";
import Cards from '../../Components/Home/Cards/cards';
import Carousel from '../../Components/Home/Carrusel/carrusel';
import Portada from '../../Components/Home/Portada/portada';
import Mapa from '../../Components/Home/Mapa/mapa';
import Publicidad from '../../Components/Home/Publicidad/publicidad';
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/WhatsApp';
function Home() {
    return (
        <>
 
            <div className="container-principal-home">
           <Fab color="primary" aria-label="add" >
  <AddIcon />
</Fab>
                <Navbar />
                <Portada />
                <div className="componentes-home">
                   
                    <Cards />
                    <Mapa/>
                    <Carousel />
                    <Publicidad/>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home;