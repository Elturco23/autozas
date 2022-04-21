import React, { useState, useEffect } from "react";
import Navbar from "../../../Components/General/Navbar/navbar";
import Footer from "../../../Components/General/Footer/footer";
import Portada from "../../../Components/Tallers/Taller1/Portada/portada";
import Informacion from "../../../Components/Tallers/Taller1/Informacion/informacion";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/WhatsApp";
import MapaT1 from "../../../Components/Tallers/Taller1/Mapa/mapa";
import Catalogo from "../../../Components/Tallers/Taller1/Catalogo/catalogo";
import { useParams } from "react-router-dom";
import "./taller1.css";

let name, portad, log, tipo, direccio, urlubicacio,valoracio

function Taller() {
  const params = useParams();
  const { taller } = params;
 
  const url1 = `http://localhost:3001/talleres/${taller}`;
  const url2 = `http://localhost:3001/catalogo/${taller}`;
  console.log(url1);
  console.log(url2);
  const [Taller, setTaller] = useState([]);
  const [Catalog, setCatalogo] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(url1);
    const responseJson = await response.json();
    setTaller(responseJson);
    console.log('entre aquí')
  };
  const fetchApi1 = async () => {
    const response = await fetch(url2);
    const responseJson = await response.json();
    setCatalogo(responseJson);
    console.log(responseJson);
  };

  useEffect(() => {
    fetchApi();
    fetchApi1();
}, []);
   
  for (let i = 0; i < Taller.length; i++) {
   let {Nombre, Portada, Logo, Tipos, Direccion, Urlubicacion,Valoracion}=Taller[i]
   name=Nombre
   portad=Portada
   log=Logo
   tipo=Tipos
   direccio=Direccion
   urlubicacio=Urlubicacion
  valoracio=Valoracion
  }
 

  return (
    <>
      <div className="container-principal-taller">
        <Fab color="primary" aria-label="add">
          <AddIcon />
          <div className="radar"></div>
          <div className="radar"></div>
          <div className="radar"></div>
          <div className="radar"></div>
        </Fab>
        <Navbar />
        <Portada portada={portad} />
        <Informacion
          logo={log}
          nombre={name}
          tiposervicio={tipo}
          direccion={direccio}
          valoracion={valoracio}
        />
        <div className="mapa-and-catalogo">
          <MapaT1 url={urlubicacio} />
          <Catalogo catalogo={Catalog} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Taller;
