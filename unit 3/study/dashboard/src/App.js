import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import Average from './components/Average';
import Analysis from './components/Analysis';
import Visitors from './components/Visitors';
import './App.css';

function App() {
  return (
    <div className="container">
      
        <Sidebar/>
      
      <div className="subcontainer">
        <Reviews/>
        <Average/>
        <Analysis/>
        <Visitors/>
      </div>
    </div>
  );
}

export default App;
