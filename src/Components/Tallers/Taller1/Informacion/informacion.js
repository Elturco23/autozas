import React from "react";
import "./informacion.css";
import iconLocalitation from "../../../../img/Taller/Taller1/localizacion.png";
import iconCall from "../../../../img/Taller/Taller1/centro-de-llamadas.png";
import iconRanking from "../../../../img/Taller/Taller1/chevron.png";
function informacion(props) {
  
  return (
    <div className="container-principal-informacion-taller1">
      <div className="logo-taller1">
        <img src={props.logo} height="120px" />
      </div>
      <div className="nombre-taller1">
        <h2 className="h2-taller">{props.nombre}</h2> <br />{" "}
        <h5 className="h5-taller">{props.tiposervicio}</h5>{" "}
        <h5 className="h5-taller">
        <img src={iconRanking} />{props.valoracion}
        </h5>
      </div>
      <div className="direccion-taller1">
        <h5 className="h5-taller">
          <img src={iconLocalitation} /> {props.direccion}
        </h5>
      </div>
      <div className="contacto-taller1">
        <h6 className="h6-taller">Comunícate con nosotros</h6>
        <button>
          <img src={iconCall} /> LLAMAR
        </button>
      </div>
    </div>
  );
 
}

export default informacion;
