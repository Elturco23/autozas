import React from "react";
import './home.css';
import Navbar from "../../Components/General/Navbar/navbar";
import Footer from "../../Components/General/Footer/footer";
import Cards from '../../Components/Home/Cards/cards';

function Home(){
return(
    <>
    
<div className="container-principal-home">
<Navbar/>
<div className="componentes-home">
<Cards/>
</div>
</div>
<Footer/>
</>
);
} 
export default Home;