import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Tasks from './pages/Tasks';
import UploadDocuments from './pages/UploadDocuments';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/upload-documents" element={<UploadDocuments />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;