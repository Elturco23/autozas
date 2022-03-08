import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home/home';
function App() {
  return (
    <>
    <div className="App">
         <BrowserRouter>
          <Switch>
            <Route exact path={["/inicio", "/"]}>
              <Home/>
              </Route>
            
            </Switch>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
