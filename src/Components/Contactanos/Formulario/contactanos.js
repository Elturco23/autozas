import React from "react";
import "./contactanos.css";
function contactanos() {
  return (
    <>
      <div className="container-principal-formulario">
        <div className="container-secundario-formulario">
          <h2
            style={{
              color: "#2b2d42",
              fontWeight: "bold",
            }}
          >
            CONTACTATE CON NOSOTROS
          </h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre Completo"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo Electronico"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              @example.com
            </span>
          </div>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Telefono"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <h3
            for="basic-url"
            className="form-label"
            style={{
              color: "#2b2d42",
              fontWeight: "bold",
            }}
          >
            Consulta
          </h3>
          <div className="form-outline">
            <textarea
              className="form-control"
              id="textAreaExample"
              rows="4"
            ></textarea>
            <label className="form-label" >
              Añade tu consulta
            </label>
          </div>
          <button
            type="button"
            className="btn "
            style={{
              height: "40px",
              width: "auto",
              borderRadius: "0.3em",
              backgroundColor: "#20A39E",
              fontWeight: "bold",
              color: "white",
              border: "none",
              margin: "5% 0",
            }}
          >
            Enviar Mensaje
          </button>
        </div>
      </div>
    </>
  );
}

export default contactanos;
