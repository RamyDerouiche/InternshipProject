import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Calendartest from './components/Calendar/Calendartest';
import { Calendar } from './components/Calendar/components';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Calendartest" element={<Calendar />} />

      </Routes>
    </>
  );
}

export default App;