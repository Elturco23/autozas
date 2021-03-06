import React, { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../../Components/General/Navbar/navbar";
import Footer from "../../Components/General/Footer/footer";
import Cards from "../../Components/Home/Cards/cards";
import Carousel from "../../Components/Home/Carrusel/carrusel";
import Portada from "../../Components/Home/Portada/portada";
import Mapa from "../../Components/Home/Mapa/mapa";
import Publicidad from "../../Components/Home/Publicidad/publicidad";


function Home() {
  const url = "https://thawing-cliffs-11679.herokuapp.com/talleres";
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
