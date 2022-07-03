import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navigation/navbar';
import Inicio from './components/pages/inicio';
import Pokemon from './components/pages/pokemon';
import Items from './components/pages/items';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
  
    </div>
  );
}

export default App;
