import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="header fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">SmartAssign</h1><span>.</span>
        </Link>

        <nav className="navmenu">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">A Propos</Link></li>
            <li><a href="#features">Fonctionnalités</a></li>
            <li><Link to="/calendar">Calendrier</Link></li>
            <li><a href="#dashboard">Tableau de Bord</a></li>
            <li><a href="#contact">Assistance</a></li>
          </ul>
        </nav>

        <a className="btn-login" href="#about">Connexion/Inscription</a>
      </div>
    </header>
  );
}
export default Navbar;