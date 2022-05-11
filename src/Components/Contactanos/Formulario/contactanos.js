import React, { useState } from "react";
import "./contactanos.css";

function Contactanos() {
  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Descripcion, setDescripcion] = useState("");

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleChangeCorreo = (e) => {
    setCorreo(e.target.value);
  };
  const handleChangeTelefono = (e) => {
    setTelefono(e.target.value);
  };
  const handleChangeDescripcion = (e) => {
    setDescripcion(e.target.value);
  };
  async function EnviarConsulta(e) {
    const url = "https://thawing-cliffs-11679.herokuapp.com/consulta";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        nombre: Nombre,
        correo: Correo,
        telefono: Telefono,
        descripcion: Descripcion,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    setCorreo("");
    setNombre("");
    setDescripcion("");
    setTelefono("");
    window.alert('Consulta enviada correctamente')
 
  }
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
              value={Nombre}
              onChange={handleChangeNombre}
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo Electronico"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={Correo}
              onChange={handleChangeCorreo}
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
              value={Telefono}
              onChange={handleChangeTelefono}
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
              value={Descripcion}
              onChange={handleChangeDescripcion}
            ></textarea>
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
            onClick={EnviarConsulta}
          >
            Enviar Mensaje
          </button>
        </div>
      </div>
    </>
  );
}

export default Contactanos;
