
import './App.css';
import Home from './Screens/Home/home';
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
     <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
             </Routes>
        </BrowserRouter>
   
  );
}

export default App;
