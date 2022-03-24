
import './App.css';
import Home from './Screens/Home/home';
import ListaTaller from './Screens/ListaTalleres/listataller';
import Taller1 from './Screens/Tallers/Taller1/taller1';
import Contactanos from './Screens/Contactanos/Formulario/contactanos';
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
     <div className='App'>
     <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/lista-taller" element={<ListaTaller/>}/>
            <Route exact path="/taller1" element={<Taller1/>}/>
            <Route exact path="/contactanos" element={<Contactanos/>}/>
             </Routes>
        </BrowserRouter>
        </div>
  );
}

export default App;
