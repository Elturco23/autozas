import React, { useEffect, useState } from "react";
import Lista from "./lista/lista";
import "./buscador.css";
function Buscador() {
  const url = "https://thawing-cliffs-11679.herokuapp.com/talleres";
  const [Talleres, setTalleres] = useState([]);
  const [TablaTalleres, setTablaTalleres] = useState([]);
  const [Busqueda, setBusqueda] = useState("");
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setTalleres(responseJson);
    setTablaTalleres(responseJson)
  };
  const handleChange =e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log("Busqueda"+e.target.value)
  }
  const filtrar =(terminobusqueda)=>{
var ResultadoBusqueda=TablaTalleres.filter((elemento)=>{
  if(elemento.Nombre.toString().toLowerCase().includes(terminobusqueda.toLowerCase())){
 return elemento || !elemento;
  }
});
setTalleres(ResultadoBusqueda);
  }
  console.log(Talleres);
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
     <h1 className="titulo-listatalleres">Talleres Socios</h1>
    <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            value={Busqueda}
            id="inputPassword2"
            placeholder="Buscador"
            onChange={handleChange}
          ></input>
         
        </div>
       {!Talleres.length ? (
       <div>
         <div
        style={{
          marginTop: "5%",
          marginBottom: "5%",
        }}
        className="spinner-border"
        role="status"
      >
        <span className="visually-hidden">Cargando...</span>
       
      </div>
       <h2 style={{textAlign:"center"}}>No se encontro ningún taller</h2>
       </div>
  ) : (
   

        <Lista talleres={Talleres} />
     
   
  )
}
    </>
  
  );
  }

export default Buscador;
