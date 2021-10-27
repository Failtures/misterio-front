import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Lobby from './components/pages/Lobby';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={'/'} component={Home}></Route>
          <Route exact path={'/Lobby/:gameName'} component={Lobby}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
