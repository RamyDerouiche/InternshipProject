import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Tasks from './pages/Tasks'
import UploadDocuments from './pages/UploadDocuments'
import Calendar from './pages/Calendar'
import Dashboard from './pages/Dashboard'
import Ressources from './pages/Ressources'
import Assistance from './pages/Assistance'
import { ThemeProvider } from './components/theme-provider'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {!loggedIn && (
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/upload-documents" element={<UploadDocuments />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/contact" element={<Assistance />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;