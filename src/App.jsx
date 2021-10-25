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
          <Route exact path={'/'} component={Home}></Route>
          <Route exact path={'/Lobby/:nameGame'} component={Lobby}></Route>
          <Route exact path={'/Game'} component={Game}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
