import React, { useState, useEffect } from "react";
import "./lista.css";
//import { talleres } from "./talleres";
import logo1 from "../../../img/Home/logo1.png";
import { Link } from "react-router-dom";
//const items = talleres;

function Talleres() {
  const url = "http://localhost:3001/talleres";
  const [Talleres, setTalleres] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setTalleres(responseJson);
    
  };
console.log(Talleres)
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="container-listatalleres">
      <h1 className="titulo-listatalleres">Talleres Socios</h1>
      <div class="list-group">
        {!Talleres ? (
          <h2>No hay talleres disponibles</h2>
        ) : (
          Talleres.map((item) => (
            <Link
              to={`${item.Id}`}
              class="list-group-item list-group-item-action flex-column align-items-start "
            >
              <div
                class="d-flex w-100 justify-content-between"
                id="lista-taller"
              >
                <img
                  src={item.Logo}
                  height="150px"
                  
                  className="mb-1"
                />
                <div className="textos-talleres">
                <h1 className="mb-1-texto">{item.Nombre}</h1>
                <h4 className="mb-2-texto">{item.Descripcion }</h4>
                </div>
               
                <small className="texto-small-listataller">
                  Socio de Autozas <br />
                  <img
                    className="logo-autozas-lista-taller"
                    src={logo1}
                    height="60px"
                  />
                </small>
              </div>

              
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
export default Talleres;
