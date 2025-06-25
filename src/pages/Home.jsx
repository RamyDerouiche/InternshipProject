import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="hero-title"></div>
              <h1> Attribuez les tâches automatiquement.<br />Optimisez les performances de vos équipes.</h1>
            <div className="hero-description"></div> 
              <p>
                L’assignation manuelle des tâches fait perdre du temps et génère de la frustration.
                <br />
                <strong>SmartAssign</strong> garantit une répartition équitable, rapide et transparente — tout cela depuis un seul tableau de bord.
              </p>
          </div>
          <div className="col-lg-6 hero-img">
            <img src={` ${import.meta.env.BASE_URL}assets/img/hero-img.png`} className="img-fluid" alt="Illustration SmartAssign" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;