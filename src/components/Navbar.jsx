import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ loggedIn }) {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      if (isScrolled) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header id="header" className="header fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">SmartAssign</h1><span>.</span>
        </Link>

        <nav className="navmenu">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            {!loggedIn && <li><Link to="/about">A Propos</Link></li>}
            {loggedIn && (
              <>
                <li><a href="#features">Fonctionnalités</a></li>
                <li><Link to="/calendar">Calendrier</Link></li>
                <li><a href="#dashboard">Tableau de Bord</a></li>
              </>
            )}
            {!loggedIn && <li><a href="#contact">Assistance</a></li>}
          </ul>
        </nav>

        <Link to="/login" className="btn-login">Connexion/Inscription</Link>
      </div>
    </header>
  );
}

export default Navbar;