import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import UsBussiness from './components/UsBussiness';
import Navbar from './components/Navbar';
import GermenyBussiness from './components/GermenyBussiness';
import Home from './Home';

function App() {
  return (

    <div className="App bg-dark">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/us' element={<UsBussiness />} />
          <Route path='/germeny' element={<GermenyBussiness />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
