import React from "react";
import './home.css';
import Navbar from "../../Components/General/Navbar/navbar";
import Footer from "../../Components/General/Footer/footer";
import Cards from '../../Components/Home/Cards/cards';
import Carousel from '../../Components/Home/Carrusel/carrusel';
import Portada from '../../Components/Home/Portada/portada';
function Home() {
    return (
        <>

            <div className="container-principal-home">
                <Navbar />
                <Portada />
                <div className="componentes-home">
                   
                    <Cards />
                    <Carousel />
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home;