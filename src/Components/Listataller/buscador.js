import React,{useEffect,useState} from 'react';
import Lista from './lista/lista';
import './buscador.css';
function Buscador() {
    const url = "http://localhost:3001/talleres";
  const [Talleres, setTalleres] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setTalleres(responseJson);
    
  };
console.log(Talleres)
  useEffect(() => {
    fetchApi();
  }, []);
    return (
      !Talleres.length ? <>
      <div style={{
       marginTop: '15%',
       marginBottom:'3%'
      }}className="spinner-border" role="status">
      <span className="visually-hidden">Cargando...</span>
      
      
    </div>
    
    </>
    
      :
        <form className="form-inline">
            <h1 className="titulo-listatalleres">Talleres Socios</h1>
        <div className='container container-lista'>
           
 
  <div className="form-group mx-sm-3 mb-2">
    
    <input type="text" className="form-control" id="inputPassword2" placeholder="Buscador">

    </input>
    <button type="submit" className=" boton-lista-taller btn btn-primary mb-2">Confirm identity</button>
  </div>
 

          <Lista talleres={Talleres}/>  
        </div>
        </form>
    );
}

export default Buscador;