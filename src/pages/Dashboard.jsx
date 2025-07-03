import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Dashboard.css';

function Dashboard() {
  return (
    
    <div className="dashboard container py-5">
      <h2 className="mb-1">Bienvenue, Omar 👋</h2>
      <p className="text-muted mb-4">
        Suivez vos tâches, consultez le calendrier et surveillez vos performances.
      </p>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Tâches du jour</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">Tâche A <span className="text-muted">- 16:00</span></li>
                <li>Tâche B (réunion) <span className="text-muted">- 10:30</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100 d-flex flex-column align-items-center justify-content-center p-4">
            <div className="progress-circle position-relative">
              <span className="progress-value">75%</span>
            </div>
            <p className="mt-3 mb-0 text-center text-muted">des tâches complétées</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <i className="bi bi-calendar2-week display-6 text-primary mb-3"></i>
              <Link to="/calendar" className="btn btn-primary">Voir le calendrier</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <i className="bi bi-list-task display-6 text-primary mb-3"></i>
              <Link to="/tasks" className="btn btn-primary">Aller aux tâches</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Messages</h5>
              <p className="card-text mb-0">
                <strong>Alice M.</strong> : N'oublie pas de mettre à jour ton rapport.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Notifications récentes</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">Ahmed a commenté votre tâche.</li>
                <li>Mise à jour du projet Alpha.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
