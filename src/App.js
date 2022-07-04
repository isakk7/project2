
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navigation/navbar';
import Inicio from './components/pages/inicio';
import Pokemon from './components/pages/pokemon';
import './components/pages/style.css'
import Home from './home'




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path="/" element={ <Inicio />} />
          <Route path='/pokemon' element={<Pokemon />}/>
        
          </Routes>
      </Router>
  
    </div>
  );
}

export default App;
