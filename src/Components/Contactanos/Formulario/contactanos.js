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
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Nombre Completo"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Correo Electronico"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              @example.com
            </span>
          </div>
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="Telefono"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <h3
            for="basic-url"
            class="form-label"
            style={{
              color: "#2b2d42",
              fontWeight: "bold",
            }}
          >
            Consulta
          </h3>
          <div class="form-outline">
            <textarea
              class="form-control"
              id="textAreaExample"
              rows="4"
            ></textarea>
            <label class="form-label" >
              Añade tu consulta
            </label>
          </div>
          <button
            type="button"
            class="btn "
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
