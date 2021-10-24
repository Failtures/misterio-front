import './App.css';
import Home from './components/Home';
import Prueba from './components/prueba';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route  exact path={'/'} component={Home}></Route>
          <Route exact path={'/Prueba'} component={Prueba}></Route>
        
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
