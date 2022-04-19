import React from "react";

import "./mapa.css";

function Map(props) {
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
        src={props.url}
        
        width="50%"
        height="70%"
        style={{ border: 0 }}
       
      ></iframe>
    </div>
  );
}

export default Map;
