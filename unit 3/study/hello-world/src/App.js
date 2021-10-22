import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';

function App() {

  return (
    <>
      <Header/>
      <Player che="guda" player="X"/>
      <Player che="tri" player="O"/>
      <Board/>
    </>
  )
}

export default App;
