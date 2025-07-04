import React, { UseEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Dashboard.css';


function Dashboard() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Bonjour';
    if (hour >= 12 && hour < 18) return 'Bon après-midi';
    return 'Bonsoir';
  };

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  const user = { name: 'John Doe', role: 'Support' };

  const initialCards = [
    { id: 'projects', title: 'Projects', text: '5 active projects' },
    { id: 'tasks', title: 'Tasks', text: '24 tasks pending' },
    { id: 'team', title: 'Team', text: '6 members' },
    { id: 'finance', title: 'Finance', text: 'Quarterly review soon' },
    { id: 'activities', title: 'Activities', text: '3 new updates' },
  ];

  const [cards, setCards] = useState(initialCards);
  const [dragOver, setDragOver] = useState(null);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (idx) => {
    setDragOver(idx);
  };

  const handleDragLeave = () => {
    setDragOver(null);
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    if (dragIndex === dropIndex) {
      setDragOver(null);
      return;
    }
    const updated = [...cards];
    const [removed] = updated.splice(dragIndex, 1);
    updated.splice(dropIndex, 0, removed);
    setCards(updated);
    setDragOver(null);
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'bi-speedometer2' },
    { id: 'project', label: 'Project', icon: 'bi-briefcase' },
    { id: 'task', label: 'Task', icon: 'bi-check-circle' },
    { id: 'team', label: 'Team', icon: 'bi-people' },
    { id: 'client', label: 'Client', icon: 'bi-person-circle' },
    { id: 'finance', label: 'Finance', icon: 'bi-bar-chart-line' },
    { id: 'analytics', label: 'Analytics', icon: 'bi-graph-up' },
    { id: 'notifications', label: 'Notifications', icon: 'bi-bell' },
    { id: 'support', label: 'Support', icon: 'bi-headset' },
    { id: 'settings', label: 'Settings', icon: 'bi-gear' },
  ];


return (
    <div className="dashboard-wrapper d-flex">
      <aside className="sidebar d-flex flex-column">
        <div className="p-3 border-bottom fw-bold d-flex align-items-center">
          <i className="bi bi-grid-fill me-2"></i>Drageasy
        </div>
        <ul className="nav flex-column px-2 pt-3">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item mb-1">
              <span className="nav-link d-flex align-items-center">
                <i className={`bi ${item.icon} me-2`}></i>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-auto p-3 border-top small">
          <div>{user.name}</div>
          <div className="text-muted">{user.role}</div>
        </div>
</aside>
      <main className="flex-fill p-4">
        <h2 className="mb-4">
          {greeting}, {user.name.split(' ')[0]} !
        </h2>
        <div className="row g-3">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className="col-md-6 col-lg-4"
              draggable
              onDragStart={(e) => handleDragStart(e, idx)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, idx)}
              onDragEnter={() => handleDragEnter(idx)}
              onDragLeave={handleDragLeave}
            >
              <div className={`card card-custom h-100 ${dragOver === idx ? 'drag-over' : ''}`}>
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;