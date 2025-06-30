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
          
      <div class="row feature-boxes">
        <div class="col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
          <div class="feature-box">
            <div class="feature-icon me-sm-4 mb-3 mb-sm-0">
              <i class="bi bi-gear"></i>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Attribuer des taches équitable et intelligente</h3>
              <p class="feature-text">Basée sur les roles et les charges de travail.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
          <div class="feature-box">
            <div class="feature-icon me-sm-4 mb-3 mb-sm-0">
              <i class="bi bi-tache"></i> <img src={`tache.png`} className="img-tache" alt= "tache" />

            </div>
            <div class="feature-content">
              <h3 class="feature-title">Suivi en temps réel</h3>
              <p class="feature-text">De l'avancement, des gloulots d'étranglement et des responsabilités.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="400">
          <div class="feature-box">
            <div class="feature-icon me-sm-4 mb-3 mb-sm-0">
              <i class="bi bi-list-task"></i>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Amélioration de la productivité</h3>
              <p class="feature-text">Grace à l'automatisation, aux suggestions et aux statistiques managériales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
