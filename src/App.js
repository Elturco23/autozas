
import './App.css';
import Home from './Screens/Home/home';
import ListaTaller from './Screens/Lista-Talleres/taller';
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
     <div className='App'>
     <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/lista-taller" element={<ListaTaller/>}/>
             </Routes>
        </BrowserRouter>
        </div>
  );
}

export default App;
