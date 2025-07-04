import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Sitename from '../pages/Sitename';

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

        <NavLink to="/" className="me-auto me-xl-0" >
          <Sitename />
        </NavLink>


        {!loggedIn && (
            <nav className="navmenu">
              <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/about">A Propos</NavLink></li>
                <li><NavLink to="/contact">Assistance</NavLink></li>
              </ul>
              </nav>
        )}

             

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