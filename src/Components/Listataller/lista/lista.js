import React, { useState, useEffect } from "react";
import "./lista.css";
//import { talleres } from "./talleres";
import logo1 from "../../../img/Home/logo1.png";
import { Link } from "react-router-dom";
//const items = talleres;

function Talleres(props) {
  
  return (
    <div className="container-listatalleres">
      
      <div className="list-group">
        {!props.talleres.length ? (
          <h2 style={{width:"100%"}}>No hay talleres disponibles</h2>
        ) : (
          props.talleres.map((item) => (
            <Link
              to={`${item.Id}`}
              className="list-group-item list-group-item-action flex-column align-items-start "
            >
              <div
                className="d-flex w-100 justify-content-between"
                id="lista-taller"
              >
                <img
                  src={item.Logo}
                  height="150px"
                  alt="description of image"
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
                    alt="description of image"
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
