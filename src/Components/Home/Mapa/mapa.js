import React, { Component } from "react";

import "./mapa.css";

function SimpleMap() {
  return (
    // Important! Always set the container height explicitly
    <div
      id="map-container-google-2"
      class="z-depth-1-half map-container"
      style={{ height: "60vh", width: "100%" }}
    >
      <h2 className="titulo-mapa"> Talleres cerca a ti </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.436361726418!2d-74.80528998568134!3d11.00585065792765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d9f4b6c82d3%3A0xab73301ba7022ef3!2sCentro%20Empresarial%20Green%20Towers!5e0!3m2!1ses!2sco!4v1647614079769!5m2!1ses!2sco"
        frameborder="0"
        width='60%'
        height='100%'
        style={{ border: 0 }}
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default SimpleMap;
