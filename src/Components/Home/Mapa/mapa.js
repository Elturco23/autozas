/* eslint-disable no-undef */
/* global google */
import React, { useEffect, useState } from "react";
import "./mapa.css";
import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import IconMap from "../../../img/Home/mecanica.png";
import IconMapUser from "../../../img/Home/location.png";
function Home(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDTSboVvI6MN2qeP89lrSldb17uSWJ3kxY",
  });

  const [Talleres, setTalleres] = useState([]);
  const [Position, setPosition] = useState({
    longitude: 0,
    latitude: 0,
  });
  function rad(x) {
    return (x * Math.PI) / 180;
  }
  const getKilometros = (lat1, lon1, lat2, lon2) => {
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(lat1)) *
        Math.cos(rad(lat2)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(3); //Retorna tres decimales
  };
  const filtrar = (latitud, longitud) => {
    const TalleresCercanos = props.Talleres.filter((elemento) => {
      const distancia = getKilometros(
        latitud,
        longitud,
        elemento.Latitud,
        elemento.Longitud
      );
      console.log("distancia", distancia);
      // radio de 1km - 1000 metros
      if (distancia <= 1.5) {
        return elemento || !elemento;
      }
    });
    console.log("Talleres", TalleresCercanos);
    setTalleres(TalleresCercanos);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        setPosition({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
    filtrar(11.016390832834377, -74.79541053098521);
  }, []);

  return !isLoaded || !Talleres.length ? (
    <div>Loading...</div>
  ) : (
    <div className="container-mapa">
      <h1 style={{ marginTop:'5%',marginBottom: "5%" }}>Talleres Cercanos a ti</h1>
      <Map Talleres={Talleres} />
    </div>
  );
}
function Map(props) {
  return !props.Talleres ? (
    <></>
  ) : (
    <GoogleMap
      zoom={16}
      center={{ lat: 11.016390832834377, lng: -74.79541053098521 }}
      mapContainerClassName="map-container"
    >
      <Marker title='Tu Locación Actual 'position={{ lat: 11.016390832834377, lng: -74.79541053098521 }} icon={IconMapUser}/>
      {props.Talleres.map((item) => {
        return (
          <Marker
            key={item.Id}
            position={{ lat: Number(item.Latitud), lng: Number(item.Longitud) }}
            title={item.Nombre}
            icon={IconMap} 
            
            
          >
          
            
          
            </Marker>
        );
      })}
      )
    </GoogleMap>
  );
}

export default Home;
