import React, { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../../Components/General/Navbar/navbar";
import Footer from "../../Components/General/Footer/footer";
import Cards from "../../Components/Home/Cards/cards";
import Carousel from "../../Components/Home/Carrusel/carrusel";
import Portada from "../../Components/Home/Portada/portada";
import Mapa from "../../Components/Home/Mapa/mapa";
import Publicidad from "../../Components/Home/Publicidad/publicidad";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/WhatsApp";

function Home() {
  const url = "http://localhost:3001/talleres";
  const [Talleres, setTalleres] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setTalleres(responseJson);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  console.log(Talleres);
  return (
    !Talleres.length ? (<div
      style={{
        marginTop: "5%",
        marginBottom: "5%",
      }}
      className="spinner-border"
      role="status"
    >
      <span className="visually-hidden">Cargando...</span>
     
    </div>):(
    <>
      <div className="container-principal-home">
        <Fab color="primary" aria-label="add">
          <AddIcon />
          <div className="radar"></div>
          <div className="radar"></div>
          <div className="radar"></div>
          <div className="radar"></div>
        </Fab>
        <Navbar />
        <Portada />
        <div className="componentes-home">
          <Cards />
          <Mapa Talleres={Talleres} />
          <Carousel />
          <Publicidad />
        </div>
      </div>
      <Footer />
    </>
    )
  );
}
export default Home;
