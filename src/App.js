import './App.css';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <nav>
        <Link className='navLink' to="/">Home</Link>
        <Link className='navLink' to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
