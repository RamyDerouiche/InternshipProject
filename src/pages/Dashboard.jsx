import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Bienvenue, User2</h1>
      <p className="subtitle">
        Voici votre tableau de bord. Suivez vos tâches, votre calendrier, et vos performances.
      </p>

      <div className="dashboard-grid">

        {/* Tasks */}
        <div className="card tasks-card">
          <h3>Vos tâches pour aujourd’hui</h3>
          <ul>
            <li>
              Tâche A: Rapport à remettre <span>16:00</span>
            </li>
            <li>
              Tâche B: Réunion avec le manager <span>10:30</span>
            </li>
          </ul>
        </div>

        {/* Progress */}
        <div className="card progress-card">
          <h3>Progrès</h3>
          <div className="progress-circle">
            <svg width="80" height="80">
              <circle cx="40" cy="40" r="35" stroke="#e6e6e6" strokeWidth="8" fill="none" />
              <circle cx="40" cy="40" r="35" stroke="#3b82f6" strokeWidth="8" fill="none"
                strokeDasharray="220"
                strokeDashoffset="55"
                strokeLinecap="round"
              />
            </svg>
            <div className="progress-text">75%</div>
          </div>
          <p>des tâches complétées</p>
        </div>

        {/* Calendar Button */}
        <div className="card button-card">
          <h3>Calendrier</h3>
          <button>Voir le calendrier</button>
        </div>

        {/* Task Manager Button */}
        <div className="card button-card">
          <h3>Gérer les tâches</h3>
          <button>Aller aux tâches</button>
        </div>

        {/* Messages */}
        <div className="card message-card">
          <h3>Messages</h3>
          <p><strong>Alice M.</strong></p>
          <p className="small">N’oubliez pas de mettre à jour votre rapport</p>
        </div>

        {/* Notifications */}
        <div className="card notifications-card">
          <h3>Notifications récentes</h3>
          <ul>
            <li>Nouvelle tâche assignée par 👤 Ahmed</li>
            <li>Projet Alpha mis à jour</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;