import './App.css';
import Modal from './components/Modal';
import { useModal } from './hooks/useModal';
// import {Button, TextField} from '@material-ui/core';
import {TextField, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Home from './components/Home';

const useStyle = makeStyles({
  botonPersonalizado: {
    background: 'linear-gradient(45deg, #9d3a3a 30%, #812f2f 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
})

function App() {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const classes = useStyle();
  return (
    <div className="App">
      <Home/>
      {/* <button onClick = {openModal}>Modal</button>
      <Modal isOpen = {isOpenModal} closeModal = {closeModal}>
        <h1>Create Game</h1>
        <form>
            <div className="tfield-group">
              <TextField  id="outlined-basic" label="Nickname" variant="outlined"/>
              <TextField id="outlined-basic" label="Game Name" variant="outlined" />
            </div>
            <div className="button-group">
              <Button variant="contained" className={classes.botonPersonalizado}>Create Game</Button>
              <Button variant="contained" onClick={closeModal} className={classes.botonPersonalizado}>Exit</Button>
            </div>
        </form>
      </Modal> */}
    </div>
  );
}

export default App;
