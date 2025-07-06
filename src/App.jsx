import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import { VertexSidebar } from './components/vertex-sidebar';
import Login from './components/Login';
import Tasks from './pages/Tasks';
import UploadDocuments from './pages/UploadDocuments';
import Calendar from './pages/Calendar';
import Dashboard from './pages/DashboardPage';
import Ressources from './pages/Ressources';
import Assistance from './pages/Assistance';

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', path: '/dashboard' },
  { id: 'ressources', label: 'Ressources', icon: 'LineChart', path: '/ressources' },
  { id: 'calendar', label: 'Calendrier', icon: 'CalendarDays', path: '/calendar' },
  { id: 'tasks', label: 'Tâches', icon: 'CheckCircle', path: '/tasks' },
  { id: 'documents', label: 'Documents', icon: 'Trello', path: '/upload-documents' },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setLoggedIn(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = loggedIn ? '#ffffff' : '';
  }, [loggedIn]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
    setUser(null);
  };

  const routes = (
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
  );

  if (!loggedIn) {
    return (
      <>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        {routes}
      </>
    );
  }

  return (
    <div className="flex min-h-screen bg-white font-['Inter',sans-serif]">
      <VertexSidebar items={sidebarItems} activeUser={user || { name: 'User', role: 'Member', avatar: '' }} onLogout={handleLogout} />
      <main className="flex-1">{routes}</main>
    </div>
  );
}

export default App;