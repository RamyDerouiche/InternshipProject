import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar bg-light">
      <div className="p-3">
        <h2 className="fs-5 text-center mb-4">Menu</h2>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link text-dark">
              <i className="bi bi-speedometer2 me-2" /> Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/tasks" className="nav-link text-dark">
              <i className="bi bi-list-check me-2" /> Tasks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/team" className="nav-link text-dark">
              <i className="bi bi-people me-2" /> Team
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/statistics" className="nav-link text-dark">
              <i className="bi bi-bar-chart me-2" /> Statistics
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link text-dark">
              <i className="bi bi-gear me-2" /> Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;