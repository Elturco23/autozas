
import './App.css';
import React from 'react';
import Home from './Screens/Home/home';
import ListaTaller from './Screens/ListaTalleres/listataller';
import Taller1 from './Screens/Tallers/Taller1/taller1';
import Contactanos from './Screens/Contactanos/Formulario/contactanos';
import FAQs from './Screens/FAQs/faqs';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PoliticaPrivacidad from './Screens/PoliticaPrivacidad/politica';
import Quienessomos from './Screens/Quienessomos/index';
function App() {
  return (
     <div className='App'>
     <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/lista-taller" element={<ListaTaller/>}/>
            <Route exact path="/lista-taller/:taller" element={<Taller1/>}/>
            <Route exact path="/contactanos" element={<Contactanos/>}/>
            <Route exact path="/faqs" element={<FAQs/>}/>
            <Route exact path="/politicaprivacidad" element={<PoliticaPrivacidad/>}/>
            <Route exact path="/quienessomos" element={<Quienessomos/>}/>
             </Routes>
        </BrowserRouter>
        </div>
  );
}

export default App;
