import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Lobby from './components/Lobby';
import Game from './components/Game'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={'/'} component={Home}></Route>
          <Route path={'/Lobby/gameName'} component={Lobby}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
