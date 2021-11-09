// imports
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ThemeContext from './context/ContextGeneral';
//components
import Home from './components/pages/Home';
import Lobby from './components/pages/Lobby';
import Game from './components/pages/Game';
// Css styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <ThemeContext>
            <Route exact path={'/'} component={Home}></Route>
            <Route exact path={'/lobby/:game'} component={Lobby}></Route>
            <Route exact path={'/game/:game'} component={Game}></Route>
          </ThemeContext>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;