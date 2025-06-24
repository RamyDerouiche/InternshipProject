import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">SmartAssign</h1><span>.</span>
        </Link>

        <nav className="navmenu">
          <ul>
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#about">A Propos</a></li>
            <li><a href="#services">Fonctionnalités</a></li>
            <li><a href="#portfolio">Calendrier</a></li>
            <li><a href="#pricing">Tableau de Bord</a></li>
            <li><a href="#team">Assistance</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-login" href="#about">Connexion/Inscription</a>
      </div>
    </header>
  );
}
export default Navbar;