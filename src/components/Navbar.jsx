import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ loggedIn, setLoggedIn }) {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
    navigate('/');
  };

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
        <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">SmartAssign</h1><span>.</span>
        </NavLink>

        <nav className="navmenu">
          <ul>
            {!loggedIn && (
              <>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/about">A Propos</NavLink></li>
                <li><NavLink to="/contact">Assistance</NavLink></li>

              </>
            )}
            {loggedIn && (
              <>
                <li><NavLink to="/dashboard">Tableau de Bord</NavLink></li>
                <li><NavLink to="/ressources">Ressources</NavLink></li>
                <li><NavLink to="/calendar">Calendrier</NavLink></li>
                <li><NavLink to="/tasks">Tâches</NavLink></li>
                <li><NavLink to="/upload-documents">Documents</NavLink></li>
              </>
            )}
          </ul>
        </nav>

        {loggedIn ? (
          <button 
          
            type="button" 
            className="btn-login logout-btn" 
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn-login">Connexion/Inscription</Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;