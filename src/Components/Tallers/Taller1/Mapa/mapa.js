import React from "react";

import "./mapa.css";

function Map() {
  return (
    // Important! Always set the container height explicitly

    <div
      id="map-container-google-taller1"
      class="z-depth-1-half map-container"
     
    >
        <div className="figura-top"></div>
      <h2 className="titulo-mapa"> Visitanos </h2>
      <iframe
      className="mapa-taller1"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2818149337418!2d-74.84073538568131!3d11.017469857711955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c4f4e0d5821%3A0x93e8501353d9f0f3!2sToyota!5e0!3m2!1ses!2sco!4v1648050357871!5m2!1ses!2sco"
        frameborder="0"
        width="50%"
        height="70%"
        style={{ border: 0 }}
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Map;
