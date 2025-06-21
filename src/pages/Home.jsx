import React from 'react';

export default function Home() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1>Attribuez les tâches automatiquement.<br />Optimisez les performances de vos équipes.</h1>
            <h2>
              L’assignation manuelle des tâches fait perdre du temps et génère de la frustration.
              <br />
              <strong>SmartAssign</strong> garantit une répartition équitable, rapide et transparente — tout cela depuis un seul tableau de bord.
            </h2>
          </div>
          <div className="col-lg-6 hero-img">
            <img src="/assets/img/hero-img.png" className="img-fluid" alt="Illustration SmartAssign" />
          </div>
        </div>
      </div>
    </section>
  );
}
