import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/navbar';
import Login from './components/Login';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Navbar loggedIn={loggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </Router>
  );
}

export default App;