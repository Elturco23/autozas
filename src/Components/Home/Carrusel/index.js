import React,{useEffect,useState} from 'react';
import AliceCarousel from "react-alice-carousel";
import './carrusel.css'
function Carousel(props) {
    const url = "https://thawing-cliffs-11679.herokuapp.com/talleres";
  const [Talleres, setTalleres] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setTalleres(responseJson);
    
  };

  useEffect(() => {
    fetchApi();
  }, []);
    return (
      !Talleres.length ?  <><div style={{
        marginTop: '5%',
        marginBottom:'3%'
       }}className="spinner-border" role="status">
       <span className="visually-hidden">Cargando...</span>
       
       
     </div>
    
     </> :
        <div>
            <AliceCarousel autoPlay
          autoPlayInterval="1500"
          infinite
          buttonsDisabled={true}
          disableButtonsControls={true}
          disableDotsControls={true}
          responsive={props.responsive} >
          {!Talleres.length ? (
          <h2>No hay talleres disponibles</h2>
        ) : (Talleres.map((item) => (
            <div className="container-cartas" key={item.Id}>
            <img src={item.Logo} height="75px" />
            
            <div className="card-cuerpo">
              
            <hr className='separador'/>
              <h5 className="card-title-carousel">{item.Nombre}</h5>
              
              
            </div>
          </div>
          )
          )
        )
        }
        </AliceCarousel>
        </div>
    );
}

export default Carousel;