import React from "react";
import {MapContainer,TileLayer} from 'react-leaflet'
import "./mapa.css";

function SimpleMap() {
  return (
    // Important! Always set the container height explicitly
    <div>
      <h2 className="titulo-mapa"> Talleres cerca a ti </h2>
<MapContainer center={[51.505,-0.09]} zoom={13} scrollWheelZoom={true}>
<TileLayer
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
</MapContainer>
    </div>
  );
}

export default SimpleMap;
