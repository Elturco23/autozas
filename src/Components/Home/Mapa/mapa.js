import React from "react";
import {MapContainer} from 'react-leaflet'
import "./mapa.css";

function SimpleMap() {
  return (
    // Important! Always set the container height explicitly
    <div>
      <h2 className="titulo-mapa"> Talleres cerca a ti </h2>
<MapContainer center={{lat:'51.505', lng:'-0.09',zoom:'13'}}>

</MapContainer>
    </div>
  );
}

export default SimpleMap;
