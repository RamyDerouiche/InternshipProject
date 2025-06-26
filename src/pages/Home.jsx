import React from 'react';
import './Home.css';


function Home() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="hero-title mb-4">
              <h1>
                Attribuez les tâches automatiquement.<br />
                Optimisez les performances de vos équipes.
              </h1>
            </div>
            <div className="hero-description mb-4">
              <p>
                L’assignation manuelle des tâches fait perdre du temps et génère de la frustration.
                <br />
                <strong>SmartAssign</strong> garantit une répartition équitable, rapide et transparente —
                tout cela depuis un seul tableau de bord.
              </p>
            </div>
          </div>
          <div className="col-lg-6 hero-image">
            <img
              src={`${import.meta.env.BASE_URL}/assets/img/img1.jpg`}
              className="img-fluid"
              alt="Illustration SmartAssign"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
