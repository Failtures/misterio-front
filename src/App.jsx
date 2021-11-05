import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Lobby from './components/pages/Lobby';
import Game from './components/pages/Game';

import ThemeContext from './context/ContextGeneral';
import Canvas from './components/Canvas';

function App() {
  return (
    <div>
      <Canvas />
    </div>
    // <BrowserRouter>
    //   <div className="App">
    //     <Switch>
    //       <ThemeContext>
    //         <Route exact path={'/'} component={Home}></Route>
    //         <Route exact path={'/lobby/:game'} component={Lobby}></Route>
    //         <Route exact path={'/game/:game'} component={Game}></Route>
    //       </ThemeContext>
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;