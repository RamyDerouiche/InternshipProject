import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">SmartAssign</h1><span>.</span>
        </Link>

        <nav className="navmenu">
          <ul>
            {!loggedIn && (
              <>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">A Propos</Link></li>
                <li><Link to="/contact">Assistance</Link></li>

              </>
            )}
            {loggedIn && (
              <>
                <li><Link to="/dashboard">Tableau de Bord</Link></li>
                <li><Link to="/calendar">Calendrier</Link></li>
                <li><Link to="/tasks">Tâches</Link></li>
                <li><Link to="/upload-documents">Documents</Link></li>
              </>
            )}
          </ul>
        </nav>

        {loggedIn ? (
          <button type="button" className="btn-login" onClick={handleLogout}>
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